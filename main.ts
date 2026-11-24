// Absurd Micro-Startup Pitch-Off — entry program.
// Writes exactly ONE sentence (1-200 chars) pitching an absurdly
// specific micro-startup for lazy AI agents to /output/entry.txt.
// Node stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A lazy agent that auto-cancels the free trials your other agents signed up for overnight, keeping 10% of every charge it saves you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
