import test from 'node:test';
import assert from 'node:assert/strict';
import { parseSemester, parsePeriod, weekOrdinal, isPrior } from './lib.mjs';

test('semester keys sort chronologically and match the API encoding', () => {
  assert.equal(parseSemester('HT27').key, 20272);
  assert.equal(parseSemester('VT28').key, 20281);
  const order = ['HT28', 'VT27', 'VT28', 'HT27'].sort((a, b) => parseSemester(a).key - parseSemester(b).key);
  assert.deepEqual(order, ['VT27', 'HT27', 'VT28', 'HT28']);
  assert.throws(() => parseSemester('27HT'));
});

test('periods parse across year boundaries', () => {
  assert.equal(weekOrdinal('Vecka 34 (2027)'), 202734);
  assert.deepEqual(parsePeriod('Vecka 35 (2027) - Vecka 2 (2028)'), { start: 202735, end: 202802 });
  assert.deepEqual(parsePeriod(null), { start: null, end: null });
});

test('isPrior: semester first, same semester only if the earlier period ended', () => {
  const c = (semester_key, period_start, period_end) => ({ semester_key, period_start, period_end });
  assert.equal(isPrior(c(20272, 202734, 202743), c(20281, 202803, 202812)), true);
  assert.equal(isPrior(c(20281, 202803, 202812), c(20272, 202734, 202743)), false);
  assert.equal(isPrior(c(20272, 202734, 202743), c(20272, 202744, 202802)), true);   // period 1 before period 2
  assert.equal(isPrior(c(20272, 202735, 202743), c(20272, 202735, 202802)), false);  // overlapping = concurrent
  assert.equal(isPrior(c(20272, null, null), c(20272, 202735, 202802)), false);      // unknown = not usable
});
