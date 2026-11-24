import { mkdirSync, writeFileSync } from "node:fs";

// Real-Life Patch Notes: The Comedy Changelog
// One line, at most 160 characters: a software patch note / changelog entry
// for a bug in real life or human biology, in the terse register of a real
// release note. Deterministic: the same bytes on every run.
const ENTRY =
  "v2.4.1: fixed a bug where the brain replayed your most embarrassing moment from 2014 every night at 3 a.m. with no skip button.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-160
// characters, not only whitespace. Fail loudly instead of shipping a
// broken entry.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
