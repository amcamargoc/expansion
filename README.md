# Lavanda Code

AI-powered MVP development framework with skill-based agents. Works across **OpenCode**, **Claude Code**, and **Gemini CLI**.

```
Idea → Clarify → Challenge → Define → Roadmap → Tickets
                                       ↓
                        [Build → Verify → Review → Test → Audit] per phase → Deploy
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
> Use the clarify skill to help me define my idea for [your idea]
```

### Gemini CLI

```bash
# Skills auto-discovered from .agents/skills/
# Start the flow:
> Activate the clarify skill. I want to clarify my idea for [your idea]
```

## Examples

See [examples/showcase](./examples/showcase/contact-form-example.md) for a complete walkthrough of building a feature with the framework.

---

## The Flow

## The Flow

### Phase 1: Planning

| Step | Skill | What it does |
|------|-------|-------------|
| 1 | `clarify` | Clarify vague ideas into specific requirements |
| 2 | `challenge` | Stress-test your idea through relentless interview |
| 3 | `define` | Interview → PRD with user stories, decisions, scope |
| 4 | `roadmap` | PRD → phased vertical slices saved to `./plans/` |
| 5 | `tickets` | Plan → GitHub issues (optional) |

### Phase 2: Execution (per phase from plan)

| Step | Skill | What it does |
|------|-------|-------------|
| 6 | `research` | Read existing code and docs before writing anything |
| 7 | Specialist skill | `api`, `ui`, `db`, or `auth` |
| 8 | `verify` | Check output against plan acceptance criteria |

### Phase 3: Quality + Deploy

| Step | Skill | What it does |
|------|-------|-------------|
| 9 | `review` | Code quality and best practices |
| 10 | `test` | Run tests, check coverage |
| 11 | `audit` | Vulnerability and secret scanning |
| 12 | `deploy` | CI/CD, infrastructure, deployment |

## Skills (16 total)

### Planning Layer
| Skill | Source | Description |
|-------|--------|-------------|
| `clarify` | Custom | Clarify vague ideas into specific requirements |
| `challenge` | [mattpocock/skills](https://github.com/mattpocock/skills) | Stress-test through relentless interview |
| `define` | [mattpocock/skills](https://github.com/mattpocock/skills) | PRD through interview + codebase exploration |
| `roadmap` | [mattpocock/skills](https://github.com/mattpocock/skills) | Phased vertical-slice implementation plan |
| `tickets` | [mattpocock/skills](https://github.com/mattpocock/skills) | GitHub issues from plan |

### Precision Layer
| Skill | Source | Description |
|-------|--------|-------------|
| `research` | Custom | Read before writing — prevents costly corrections |
| `verify` | Custom | Verify output against plan criteria |

### Execution Layer
| Skill | Description |
|-------|-------------|
| `orchestrator` | Coordinates work, routes tasks |
| `api` | API endpoints, server logic |
| `ui` | UI components, pages, layouts |
| `db` | Schemas, queries, migrations |
| `auth` | Login, signup, sessions |
| `deploy` | CI/CD, deployments |

### Quality Layer
| Skill | Description |
|-------|-------------|
| `review` | Code quality review |
| `test` | Tests and validation |
| `audit` | Security scanning |

## Agents (OpenCode only)

OpenCode gets 5 role-based agents that auto-load the right skills:

| Agent | Mode | Role |
|-------|------|------|
| **orchestrator** | Primary | Routes tasks, manages the full flow |
| **planner** | Subagent | Planning phase: clarify → challenge → define → roadmap → tickets |
| **builder** | Subagent | Implementation: always research, then specialist skill |
| **reviewer** | Subagent | Quality gates: verify, review, test, audit (read-only) |
| **deployer** | Subagent | CI/CD and infrastructure |

## Project Structure

```
.skills/                       # Source of truth — all skill definitions
├── [16 skills]

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
