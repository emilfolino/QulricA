#!/usr/bin/env bash
# Render a QA report (Markdown) to PDF, styled by a Word template.
#   scripts/render-pdf.sh <report.md> [--template my-template.docx] [--keep-appendix]
# Pipeline: pandoc (md -> docx, applying the styles of the template) -> LibreOffice (docx -> pdf).
# Also leaves <report>.docx next to the PDF so it can be edited in Word.
# Needs pandoc (or `mise`, which is used to fetch it on demand) and LibreOffice (soffice).
set -euo pipefail
md=${1:?usage: render-pdf.sh <report.md> [--template file.docx] [--keep-appendix]}; shift
root=$(cd "$(dirname "$0")/.." && pwd)
template=$root/templates/report-reference.docx; keep=0
while [ $# -gt 0 ]; do
  case $1 in
    --template) template=${2:?--template needs a file}; shift 2 ;;
    --keep-appendix) keep=1; shift ;;
    *) echo "unknown option: $1" >&2; exit 2 ;;
  esac
done
[ -f "$md" ] || { echo "no such file: $md" >&2; exit 2; }
[ -f "$template" ] || { echo "no such template: $template" >&2; exit 2; }

if pandoc --version >/dev/null 2>&1; then pandoc=(pandoc)
elif command -v mise >/dev/null; then pandoc=(mise exec pandoc@latest -- pandoc)
else echo "pandoc not found (install it, or install mise)" >&2; exit 1; fi
command -v soffice >/dev/null || { echo "LibreOffice (soffice) not found" >&2; exit 1; }

base=${md%.md}
src=$(mktemp --suffix=.md); trap 'rm -f "$src"' EXIT
if [ $keep = 1 ]; then cp "$md" "$src"; else awk '/^## [0-9]+\. Machine-readable appendix/{exit} {print}' "$md" > "$src"; fi

"${pandoc[@]}" "$src" -f markdown+pipe_tables+yaml_metadata_block -o "$base.docx" --reference-doc="$template"
# separate profile dir: avoids clashing with a running LibreOffice
soffice -env:UserInstallation=file:///tmp/qulrica-lo-profile --headless --convert-to pdf --outdir "$(dirname "$base")" "$base.docx" >/dev/null
echo "Wrote $base.pdf (and $base.docx)"
