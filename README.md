# Lavanda Code

AI-powered MVP development framework with skill-based agents. Works across **OpenCode**, **Claude Code**, and **Gemini CLI**.

```
Idea → Grill → PRD → Plan → [Build → Verify] per phase → Deploy
```

## Quick Start

### OpenCode (richest experience — agents + skills)

```bash
# Switch to the orchestrator agent (Tab key) and describe your idea
# The orchestrator delegates to planner → builder → reviewer → deployer
```

### Claude Code

```bash
# Skills auto-discovered from .claude/skills/
# Start the flow:
> Use the grill-me skill to stress-test my idea for [your idea]
```

### Gemini CLI

```bash
# Skills auto-discovered from .agents/skills/
# Start the flow:
> Activate the grill-me skill. I want to stress-test my idea for [your idea]
```

## The Flow

### Phase 1: Planning

| Step | Skill | What it does |
|------|-------|-------------|
| 1 | `grill-me` | Stress-test your idea through relentless interview |
| 2 | `write-a-prd` | Interview → PRD with user stories, decisions, scope |
| 3 | `prd-to-plan` | PRD → phased vertical slices saved to `./plans/` |
| 4 | `prd-to-issues` | Plan → GitHub issues (optional) |

### Phase 2: Execution (per phase from plan)

| Step | Skill | What it does |
|------|-------|-------------|
| 5 | `research-first` | Read existing code and docs before writing anything |
| 6 | Specialist skill | `api-developer`, `frontend-injector`, `database-specialist`, `auth-implementation`, or `project-scaffold` |
| 7 | `verification-loop` | Check output against plan acceptance criteria |

### Phase 3: Quality + Deploy

| Step | Skill | What it does |
|------|-------|-------------|
| 8 | `code-reviewer` | Code quality and best practices |
| 9 | `engine-tester` | Run tests, check coverage |
| 10 | `security-auditor` | Vulnerability and secret scanning |
| 11 | `devops-deployer` | CI/CD, infrastructure, deployment |

## Skills (17 total)

### Planning Layer
| Skill | Source | Description |
|-------|--------|-------------|
| `grill-me` | [mattpocock/skills](https://github.com/mattpocock/skills) | Interview until shared understanding |
| `write-a-prd` | [mattpocock/skills](https://github.com/mattpocock/skills) | PRD through interview + codebase exploration |
| `prd-to-plan` | [mattpocock/skills](https://github.com/mattpocock/skills) | Phased vertical-slice implementation plan |
| `prd-to-issues` | [mattpocock/skills](https://github.com/mattpocock/skills) | GitHub issues from plan |
| `idea-refiner` | Custom | Clarify vague requirements |

### Precision Layer
| Skill | Source | Description |
|-------|--------|-------------|
| `research-first` | Custom | Read before writing — prevents costly corrections |
| `verification-loop` | Custom | Verify output against plan criteria |

### Execution Layer
| Skill | Description |
|-------|-------------|
| `orchestrator` | Coordinates work, routes tasks |
| `project-scaffold` | Initialize new projects |
| `api-developer` | API endpoints, server logic |
| `frontend-injector` | UI components, pages, layouts |
| `database-specialist` | Schemas, queries, migrations |
| `auth-implementation` | Login, signup, sessions |
| `devops-deployer` | CI/CD, deployments |

### Quality Layer
| Skill | Description |
|-------|-------------|
| `code-reviewer` | Code quality review |
| `engine-tester` | Tests and validation |
| `security-auditor` | Security scanning |

## Agents (OpenCode only)

OpenCode gets 5 role-based agents that auto-load the right skills:

| Agent | Mode | Role |
|-------|------|------|
| **orchestrator** | Primary | Routes tasks, manages the full flow |
| **planner** | Subagent | Planning phase: grill-me → PRD → plan → issues |
| **builder** | Subagent | Implementation: always research-first, then specialist skill |
| **reviewer** | Subagent | Quality gates: verification, code review, tests, security (read-only) |
| **deployer** | Subagent | CI/CD and infrastructure |

## Project Structure

```
.skills/                       # Source of truth — all skill definitions
├── [17 skills]

.agents/skills → .skills       # Symlink for Gemini CLI
.claude/skills → .skills       # Symlink for Claude Code
.opencode/skills → .skills     # Symlink for OpenCode

.opencode/agents/              # 5 role-based agents (OpenCode only)
├── orchestrator.md
├── planner.md
├── builder.md
├── reviewer.md
└── deployer.md

plans/                         # Output directory for planning artifacts
CLAUDE.md                      # Project context for Claude Code
GEMINI.md                      # Project context for Gemini CLI
opencode.json                  # OpenCode config + skill permissions
```

## Cost Guidance

| Principle | Why |
|-----------|-----|
| Research before coding | 5 min reading prevents hours of corrections |
| Small phases | Fewer tokens per call, less context to rebuild |
| Verify after each phase | Errors caught at $0.01 not $1.00 |
| Use plan mode for planning | Cheaper models work fine for steps 1-4 |
| Commit working state | If a session crashes, you don't lose progress |

## Extending with External Skills

Skills follow the open [Agent Skills](https://agentskills.io) standard. You can add more:

```bash
# From mattpocock's collection
npx skills@latest add mattpocock/skills/tdd

# From Anthropic's official skills
npx skills@latest add anthropics/skills/example-skills

# Or create your own — just add a folder with SKILL.md to .skills/
```

## Default Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js (App Router) |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL + Prisma |
| Auth | NextAuth.js |
| Deployment | Vercel |

---

_Last updated: 2026-04-03_
