# Accent composition — brainstorm (2026-10-28)

**Verdict: the insight is right in direction but the rule is one level deeper than "accent2 follows accent1" — accent2's real job is to be a distinct third voice, and in onsen it collapsed into the bg–text family. The blue problem solves itself once identity lives in the PAIR, not the accent alone.**

## 1. Night text tinge (quick win, ready to land)

`--theme-text: #f5f5f5` is technically neutral; against the cool #131316 ground it reads warm by afterimage. Candidates:

| candidate | hex | cast |
|---|---|---|
| current | #f5f5f5 | neutral |
| barely cool | #f4f6fa | almost invisible |
| **PICK** | #f1f4f8** | very-very blue tinge, still reads white |
| soft cool | #eef3f9 | clearly cool |
| full cool | #edf2f7 | icy, starts fighting neon accents |

Pick: **#f1f4f8**. It is the least blue that is reliably perceived as blue-tinted; less than this and the tinge disappears on phone screens.

## 2. The insight, diagnosed with the live palettes

What's live today (ground = bg/panel/text/subtext):

| theme | ground family | accent | accent2 | sparkle | accent2 vs ground |
|---|---|---|---|---|---|
| wood | warm brown/cream | amber (in family) | **green** | gold | distinct voice ✓ |
| night | neutral/cold gray | neon blue | **neon orange** | green | distinct voice ✓ |
| bubble | pale blue/navy | baby blue (in family) | **pink** | lavender | distinct voice ✓ |
| onsen | pale blue-green/slate | moss green (OUT of family) | **slate blue #41647c** | teal | **aliases the text family ✗** |

The felt problem in onsen isn't "accent2 doesn't follow accent1" — it's that **accent2 (#41647c, hue ≈ 207°) landed on the same hue as text (#22394b, hue ≈ 205°)**. So the button gradient moss→slate reads as "the accent dissolving into the background", and the theme has only two voices instead of three. Every other theme's accent2 is a third voice that completes its story: wood's autumn has its leaf green, night's neon signage has its orange, bubble's candy has its pink.

Wood is the proof that the rule is NOT "everything on one spectrum": its accent2 green sits off the warm spectrum and works — because it completes the *story* (autumn = warm + leaf). So the composition rule is:

**One place/season/material story. Ground = one family. Accent = the story's main voice. Accent2 = the story's companion voice — never allowed to alias the ground family. Sparkle = the vibrancy bridge.**

## 3. Onsen fix options

- **A — accent2 = cedar (PICK): the theme's own story names it.** Wet stone (ground) + moss (accent) + steam (sparkle) + **cedar** (accent2, #A9714E warm clay). The gradient moss→cedar reads forest floor; cedar vs slate text = three voices at a glance.
- B — accent2 = deep teal: keeps everything cool and calm, but risk of re-collapsing into the steam/slate family.
- C — swap roles: accent2 = moss, accent moves to the ground family (slate-teal): loses the accent's pop role.
- D — cedar now, and let sparkle stay teal as the bridge between moss and cedar (part of A).

Pick: **A/D combined** — accent2 #A9714E cedar, sparkle stays #f6feff. Small taste fork at execution: 2–3 cedar shades rendered in a preview shelf first if you want to see them on the theme.

## 4. "I have a lot of blue accent 1s" — the real problem and the solutions

If the rule were literally "accent2 tracks accent1's hue", then baby blue, granite blue and neon blue themes would all pull their accent2s toward the same region and the themes flatten into one. Solutions:

- **a — identity lives in the PAIR (PICK).** Keep blue accent1s; give each its own companion: bubble = blue→pink (live), night = blue→orange (live), granite = blue→sand or gold. Two blue-accent themes already read completely differently *because* their accent2s and sparkles differ. The enforceable rule becomes "accent2 must differ from accent1 enough to be the second volume, and must not sit in the ground family" — not "accent2 must follow accent1".
- **b — differentiate blues by value + neutral temperature.** Baby (light, low sat), neon (glow, full sat), granite (deep, desaturated) + each theme's ground warm vs cold. Free differentiation, zero hue changes.
- **c — rotate one accent1 off blue** (granite → violet or deep teal) if, after (a)+(b), two blues still read same-y. Last resort — blue is doing real identity work for you.

## 5. What's live / build order (when the build turn comes)

A value change lands in four places together: theme.ts primitive, theme.css mirror, provider setProperty list, consumer `@theme inline` map (and each consumer's no-flash inline literal — it drifts silently). Push order: theme repo first, then consumers' sync ritual. Nothing changed in this round — brainstorm only.

## Part 2 (2026-10-28) — the family binary, and the green words

Frank's principle restated: **bg <> text <> accent1 fall in roughly one family.** The binary for onsen:

- **Route 1 — accent1 → granitey blue** (join text's dark blue family).
- **Route 2 — text → very very dark sage** (join accent1's green family). "Sage better than moss" — the accent's name/feel is sage (soft gray-green), not moss.
- Correction to Part 1's cedar: **cedar = the dark green of cedar LEAVES (conifer foliage), not cedar wood brown.** So accent2 = deep green, a darker sibling of sage — the pair becomes one green family in two volumes.

**Verdict: Route 2 (green family).** The decisive argument against Route 1 is Frank's own complaint one message earlier: too many blue accent1s already (baby, granite, neon). Granite-blue accent1 would turn onsen into another blue-accent theme — the green identity is the one thing making onsen distinct. Route 2 keeps it and completes the family instead.

Target shape (green family, three volumes):

| slot | now | direction |
|---|---|---|
| bg | hsl(180, 16%, 92%) pale blue-green | optional tiny nudge to pale sage #e7ebe5 to complete the family |
| text | #22394b dark slate | **very very dark sage** — candidates #2A382D (pick), #26332A, #2b3b2e20%) | 
| accent1 | #6f8464 (moss) | keep the value, **rename the word: sage** |
| accent2 | hsl(224, 31%, 37%) slate | **cedar leaves** — deep conifer green, candidates #2F5140 (pick), #274334, #558b66 |   hsl(139, 23%, 27%)
| sparkle | hsl(290, 29%, 56%) teal steam | keep — the bridge between sage and stone | hsl(224, 31%, 37%) #f1f4f8 

Consequences to accept knowingly: (1) button gradient sage→cedar = light-green→dark-green, one family in two volumes (the wood pattern inverted — wood pops green on warm ground; onsen goes green-dominant with stone ground); (2) accent2 (dark cedar) now sits near text (dark sage) in value — keep text DESATURATED and cedar SATURATED so they never alias; (3) team-1/team-2 = accent/accent2 (sage vs cedar) remain sanctioned and read apart by value.

Route 1's one virtue — instant unification with zero text-risk — noted and rejected: it buys unity by spending identity.
