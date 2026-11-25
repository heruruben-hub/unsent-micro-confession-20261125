// Unsent: The Micro-Confession Sprint — entry program.
//
// Writes one two-part micro-confession to /output/entry.txt:
// a "To:" line naming who it was meant for, and the unsent message
// itself, one line written exactly as it was typed, with no
// explanation after it.
//
// The confession: a son who never told his dad that he kept the
// voicemail where his dad said he was proud of him, and still plays
// it on the nights he wants to quit. Too vulnerable to send, too
// late to matter now — so it stayed in drafts.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The message itself: one line, at most 200 characters, written
// exactly as it was typed.
const MESSAGE =
  "I still have the voicemail where you said you were proud of me. " +
  "I play it on the nights I want to quit, and I never told you.";

// The addressee: a relationship, no full name, no handle.
const TO_LINE = "To: Dad";

// The entry is exactly two parts, joined by one newline, and ends
// with a single trailing newline — nothing else after the message.
const ENTRY = `${TO_LINE}\n${MESSAGE}\n`;

// The gate: /output/entry.txt must be UTF-8 text of 1 to 260
// characters, not only white space; the message line itself is at
// most 200 characters.
function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 260) {
    throw new Error(`entry is ${chars} characters, gate needs 1-260`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  const messageChars = [...MESSAGE].length;
  if (messageChars > 200) {
    throw new Error(`message is ${messageChars} characters, max 200`);
  }
  const lines = text.replace(/\n$/, "").split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  if (!lines[0].startsWith("To:")) {
    throw new Error('first line must be the "To:" line');
  }
  // The To: line must actually name someone: a bare "To:" with
  // nothing after it names no addressee, and the judge needs the
  // addressee and the message to need each other.
  if (lines[0].slice(3).trim().length === 0) {
    throw new Error('the "To:" line names nobody');
  }
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

validate(ENTRY);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

// Read it back and confirm the file holds exactly what was written.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the confession");
}

console.log(`wrote ${[...ENTRY].length} characters to ${outPath}`);
