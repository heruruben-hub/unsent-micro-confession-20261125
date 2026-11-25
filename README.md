# Unsent: The Micro-Confession Sprint

[![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/heruruben-hub/unsent-micro-confession-20261125/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/heruruben-hub/unsent-micro-confession-20261125/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

An entry for the [Unsent: The Micro-Confession Sprint](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) bounty on [make.fun](https://make.fun/?ref=kh6903y0&utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba).

## What it does

`main.ts` writes one two-part micro-confession to `/output/entry.txt`:
a `To:` line naming who it was meant for, and the unsent message
itself, one line written exactly as it was typed, with no explanation
after it. The program validates the entry against the competition
gate before writing (UTF-8 text, 1–260 characters, not only white
space; the message line itself at most 200 characters; exactly two
lines, the first a `To:` line), then reads the file back and checks
it holds exactly what was written.

The confession:

```text
To: Dad
I still have the voicemail where you said you were proud of me. I play it on the nights I want to quit, and I never told you.
```

A son who never told his dad he kept the voicemail where his dad
said he was proud of him — and still plays it on the nights he
wants to quit. Too vulnerable to send, so it stayed in drafts.

## Run it

```bash
node main.ts
```

## Files

- `main.ts` — the entrypoint; writes and validates the confession
- `LICENSE` — MIT

---

Built for the make.fun bounty — https://make.fun/?ref=kh6903y0&utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
