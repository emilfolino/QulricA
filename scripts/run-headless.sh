#!/usr/bin/env bash
# Run the program-prerequisite-qa skill non-interactively in one harness, to compare harnesses/models.
#   scripts/run-headless.sh <claude|opencode|codex> <program-url> [model]
# [model] uses each CLI's own naming (claude: sonnet|opus|full id; opencode: provider/model; codex: model id).
set -euo pipefail
harness=${1:?usage: run-headless.sh <claude|opencode|codex> <program-url> [model]}
url=${2:?program url required}
model=${3:-}
cd "$(dirname "$0")/.."

[ -d node_modules/playwright-core ] || npm install --no-audit --no-fund

prompt="Use the program-prerequisite-qa skill on this program: $url
Follow the skill exactly (read .agents/skills/program-prerequisite-qa/SKILL.md first). Work fully autonomously, review every course in order, and finish by running render_report.mjs. Report harness=$harness${model:+ and model=$model}."

case "$harness" in
  claude)
    export QA_HARNESS=claude-code; [ -n "$model" ] && export QA_MODEL=$model
    exec claude -p "$prompt" ${model:+--model "$model"} \
      --allowedTools "Bash(node:*)" "Bash(npm:*)" "Bash(ls:*)" Read Write Edit ;;
  opencode)
    export QA_HARNESS=opencode; [ -n "$model" ] && export QA_MODEL=$model
    exec opencode run ${model:+--model "$model"} "$prompt" ;;
  codex)
    export QA_HARNESS=codex; [ -n "$model" ] && export QA_MODEL=$model
    # workspace-write blocks the network by default; the skill must reach plan.bth.se
    exec codex exec --sandbox workspace-write -c sandbox_workspace_write.network_access=true ${model:+--model "$model"} "$prompt" ;;
  *) echo "unknown harness: $harness" >&2; exit 2 ;;
esac
