# Lavanda Code

AI-powered MVP development framework with skill-based agents.

## Workflow

Follow this sequence for any new product or feature:

1. **Stress-test** — Load `grill-me` skill. Interview until shared understanding.
2. **PRD** — Load `write-a-prd` skill. Produce a PRD via interview + codebase exploration.
3. **Plan** — Load `prd-to-plan` skill. Break PRD into phased vertical slices. Output to `./plans/`.
4. **Issues** (optional) — Load `prd-to-issues` skill. Create GitHub issues from the plan.
5. **Build** (per phase) — Load `research-first` skill FIRST, then the appropriate specialist skill (`api-developer`, `frontend-injector`, `database-specialist`, `auth-implementation`, `project-scaffold`).
6. **Verify** (per phase) — Load `verification-loop` skill. Check output against plan acceptance criteria. Fix failures before proceeding.
7. **Deploy** — Load `devops-deployer` skill only after all phases pass verification.

## Cost guidance

- Planning phase (steps 1-4): use cheaper/faster models when possible
- Always research before coding — 5 min of reading prevents hours of corrections
- Keep tasks small — one phase at a time, commit working state after each
- Verify early — errors caught now cost 1/100th of errors caught in production

## Artifacts

All planning output goes to `./plans/`. Skills are in `.skills/`.
