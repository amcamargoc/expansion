# Lavanda Code

AI-powered MVP development framework with skill-based agents.

## Workflow

Follow this sequence for any new product or feature:

1. **Clarify** — Load `clarify` skill. Transform vague ideas into specific requirements.
2. **Challenge** — Load `challenge` skill. Interview until shared understanding.
3. **Define** — Load `define` skill. Produce a PRD via interview + codebase exploration.
4. **Roadmap** — Load `roadmap` skill. Break PRD into phased vertical slices. Output to `./plans/`.
5. **Tickets** (optional) — Load `tickets` skill. Create GitHub issues from the plan.
6. **Build** (per phase) — Load `research` skill FIRST, then the appropriate specialist skill (`api`, `ui`, `db`, `auth`).
7. **Verify** (per phase) — Load `verify` skill. Check output against plan acceptance criteria. Fix failures before proceeding.
8. **Review** — Load `review` skill. Code quality checks.
9. **Test** — Load `test` skill. Validate tests pass.
10. **Audit** — Load `audit` skill. Security review.
11. **Deploy** — Load `deploy` skill only after all phases pass.

## Cost guidance

- Planning phase (steps 1-5): use cheaper/faster models when possible
- Always research before coding — 5 min of reading prevents hours of corrections
- Keep tasks small — one phase at a time, commit working state after each
- Verify early — errors caught now cost 1/100th of errors caught in production

## Artifacts

All planning output goes to `./plans/`. Skills are in `.skills/`.
