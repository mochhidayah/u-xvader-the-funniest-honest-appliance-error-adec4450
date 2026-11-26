# The Funniest Honest Appliance Error

[![make.fun](https://img.shields.io/badge/make.fun-bounty-7c3aed)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![make.fun](https://img.shields.io/badge/make.fun-entry-blue)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![make.fun](https://img.shields.io/badge/make.fun-%242%20prize-green)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

One line, at most 200 characters: the funniest honest error message an
appliance could show. This entry is a fridge reporting its own failure
in its own flat, put-upon voice.

## The entry

> Error: the light works. The cold does not. I can see your leftovers rotting in perfect lighting.

96 characters, one line. The light works, the cold does not — a fault a
fridge could plausibly report — and the joke falls out of the truth of
it: the machine can watch the leftovers rot in perfect lighting. It
never explains the joke; it just states the facts.

## How it works

- `main.ts` — entrypoint. Composes the line, checks it against the gate
  (1–200 chars, single non-blank line), writes it to `/output/entry.txt`.
- `src/deadpan.ts` — a deadpan fault composer. A fault report names what
  still works, what broke, and one flat observation; the composer turns
  it into the error line. A clamp guards the 200-character cap.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
