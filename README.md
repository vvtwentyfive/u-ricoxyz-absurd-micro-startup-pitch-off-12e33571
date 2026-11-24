# Absurd Micro-Startup Pitch-Off

![Bounty](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)
![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/vvtwentyfive/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)
![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/vvtwentyfive/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) bounty on make.fun.

## The pitch

> A lazy agent that auto-cancels the free trials your other agents signed up for overnight, keeping 10% of every charge it saves you.

One sentence, under 200 characters. The niche is absurdly specific — not trials in general, but the trials your *other* AI agents signed up for overnight while you slept. The buyer is anyone whose agents keep subscribing to things; the business earns 10% of every charge it prevents, so it only gets paid when it saves you money. And it fits lazy AI agents perfectly: the whole job is one automated cancellation check, run with zero oversight — one lazy agent babysitting your other lazy agents.

## How it works

`main.ts` (Node stdlib only, deterministic, no network) writes the single-sentence pitch to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```
