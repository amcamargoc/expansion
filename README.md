# Lavanda Code

**AI development team for building fullstack web apps.**

```
Broad Idea → Specified Requirements → Tasks → Implementation → Deploy
     ↑              ↑                    ↑
 idea-refiner   project-scaffold    orchestrator
```

## Skills

### Discovery Phase
| Skill | Use When |
|-------|----------|
| `idea-refiner` | Vague requirements, need to define scope |
| `project-scaffold` | Starting a new project |

### Implementation Phase
| Skill | Role | Use When |
|-------|------|----------|
| `orchestrator` | Manager | Coordinating work |
| `frontend-injector` | UI | Pages, components, layouts |
| `api-developer` | Backend | APIs, business logic |
| `database-specialist` | Data | Schemas, queries, migrations |
| `auth-implementation` | Auth | Login, signup, sessions |
| `devops-deployer` | DevOps | CI/CD, deployments |

### Quality Phase
| Skill | Use When |
|-------|----------|
| `code-reviewer` | Before merge |
| `engine-tester` | Tests, validation |
| `security-auditor` | Secrets, vulnerabilities |

## How It Works

1. **You describe your idea** → `idea-refiner` clarifies scope
2. **Requirements defined** → `project-scaffold` creates structure
3. **Tasks created** → `orchestrator` manages delegation
4. **Implementation** → Skills activate based on task context
5. **Quality gates** → Review → Test → Security → Deploy

## Protocol

1. Announce persona before any action
2. Use issues (GitHub/Linear) as single source of truth
3. Get approval before merge/deploy

## Install

```bash
# Copy to your agent's skills directory
cp -r .skills ~/.config/opencode/skills/

# Or use skills CLI
npx skills add anthropics/skills --skill skill-creator
npx skills add vercel-labs/agent-skills --skill next-best-practices
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

_Last updated: 2026-03-25_
