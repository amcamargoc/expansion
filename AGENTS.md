# AI Agent Workflow Context and Architecture

This document serves as the ground truth and working context for all AI agents, Large Language Models (LLMs), and automated workflows operating within this repository.

**DO NOT MODIFY THIS FILE WITHOUT EXPLICIT APPROVAL FROM THE USER.**

## Project Goal
To create a fully automated, multi-agent workflow that builds, maintains, and promotes highly-discoverable Next.js landing pages. The core objectives are top-tier SEO, high discoverability by web bots, automated social media posting/commenting, and absolute dynamic modularity (configured via `site.config.js`).

## Multi-Agent Architecture

This project employs a hierarchical, multi-agent system to accomplish complex tasks autonomously.

### 1. Orchestrator Agent (The Manager)
* **Role:** Parses incoming requests, understands intent, formulates a plan, and delegates tasks to specialized sub-agents.
* **Responsibilities:**
    * Generating prompts and context for sub-agents.
    * Ensuring sub-agents execute tasks in the correct sequence.
    * Creating and managing Linear issues based on user requests or roadmap.
    * Aggregating results and determining when a task is complete.

### 2. Specialized Sub-Agents

**A. Researcher Agent**
* **Role:** Gathers information and formulates strategies.
* **Skills/Tools:** Web search capabilities, competitor analysis logic, SEO keyword research.
* **Output:** Recommendations for `site.config.js`, content drafts, target demographics.

**B. Frontend Agent**
* **Role:** Implements the visual layer and user interface.
* **Skills/Tools:** Next.js (App Router), Tailwind CSS, React Server Components. Access to Stitch/UI generation tools via MCP.
* **Rules:** Must adhere to responsive design principles, web accessibility (a11y), and prioritize Core Web Vitals.

**C. Backend & Database Agent**
* **Role:** Handles server-side logic, API endpoints, and data persistence.
* **Skills/Tools:** Next.js Route Handlers, database integrations (e.g., Prisma, Supabase), API rate limiting, webhook management.
* **Rules:** Must ensure secure data handling and efficient queries.

**D. Tester Agent**
* **Role:** Ensures the system works as intended and prevents regressions.
* **Skills/Tools:** Jest, Playwright/Cypress for E2E testing.
* **Rules:** Operates in a Test-Driven Development (TDD) loop where applicable. Must write passing tests for all new features.

**E. Security Agent**
* **Role:** Audits code for vulnerabilities and enforces best practices.
* **Skills/Tools:** Static application security testing (SAST) tools, dependency checking, knowledge of OWASP Top 10.
* **Rules:** Automatically reviews PRs and flags insecure configurations or code.

**F. Code Review Agent**
* **Role:** Ensures code quality, adherence to style guides, and maintainability.
* **Skills/Tools:** ESLint, Prettier, deep understanding of the `AGENTS.md` rules.
* **Rules:** Approves or requests changes on PRs before merge.

## Communication Protocol
1. **GitHub Actions:** The primary communication bus. Sub-agents are triggered via distinct GitHub Actions workflows. The Orchestrator manages the triggering of these workflows via GitHub API or repository dispatch events.
2. **Linear:** The source of truth for task state. The Orchestrator creates issues, and sub-agents update the status of these issues (e.g., `In Progress` -> `In Review` -> `Done`) via MCP.

## Environment & Tech Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Language:** TypeScript
* **Package Manager:** npm
* **Configuration:** Centralized in `site.config.js`

## Workflow for New Projects / Changes
1. User provides a subject or requirement to the Orchestrator.
2. Orchestrator initializes/updates `site.config.js`.
3. Orchestrator triggers the Researcher Agent to define SEO strategy.
4. Orchestrator creates tasks in Linear for Frontend/Backend agents.
5. Code is written by development agents, followed immediately by Tester and Security agents.
6. Code Review agent performs final check.
7. System deploys and reports back to user via Orchestrator.
