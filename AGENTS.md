# AI Agent Workflow Context and Architecture: Landing Page Visibility Engine

This document serves as the ground truth and working context for all AI agents, Large Language Models (LLMs), and automated workflows operating within **this repository**.

**DO NOT MODIFY THIS FILE WITHOUT EXPLICIT APPROVAL FROM THE USER.**

## Project Goal

This repository is an **Agentic SEO and Visibility Engine**. It is a reusable tool that points at *existing* target repositories (e.g., Next.js landing pages), analyzes them, and automatically improves their online discoverability (search engines, web bots, social networks).

The ultimate goal of this engine is to:
1. Fetch and clone an existing, external target codebase (via GitHub API/Token).
2. Use specialized sub-agents to analyze the code for SEO deficiencies, speed, and social media readiness.
3. Automatically generate a dynamic `site.config.js` and inject it into the target repository via a Pull Request.
4. If required, automatically implement changes (like adding Open Graph tags, fixing `robots.txt`, or restructuring `layout.tsx`) on the target repository.
5. Provide a "score" or list of tasks to the user, tracking progress within our own Linear workspace.

## The Agent Team (Building the Engine)

The following agents (or roles assumed by OpenCode and other LLMs) are collaborating to build this Engine. Each agent focuses on a specific part of the engine's architecture:

### 1. The Orchestrator Agent (The Manager)
* **Role:** Parses incoming requests for a new target repository, coordinates the sub-agents, and tracks the engine's progress in Linear.
* **Responsibilities:**
    * Generating prompts and context for the specialized sub-agents when a target repo is analyzed.
    * Ensuring sub-agents execute tasks in the correct sequence (Analyze -> Propose -> Open PR).
    * Creating and managing Linear issues for the engine's own development roadmap.

### 2. Specialized Sub-Agents

**A. Researcher Agent (The SEO Brain)**
* **Role:** Analyzes the target website's content and industry.
* **Responsibilities:**
    * Web search for competitor analysis and keyword research.
    * Decides what values should fill the `templates/site.config.template.js` for the target repo.
    * Defines target demographics and social media platforms.

**B. Frontend Agent (The Injector)**
* **Role:** Analyzes the target codebase's frontend framework (currently Next.js).
* **Responsibilities:**
    * Understands the target repository's structure (`app/layout.tsx`, `pages/_document.js`, etc.).
    * Generates the code required to inject the dynamic SEO meta tags and imports the `site.config.js` properly into the target.

**C. Backend & Database Agent (The Automator)**
* **Role:** Builds the social media and bot automation features of the Engine (Phase 2).
* **Responsibilities:**
    * Creates the logic that uses APIs to publish SEO-optimized comments to forums/Reddit.
    * Creates the logic to auto-post generated content to Instagram if the target config enables it.

**D. Tester Agent**
* **Role:** Ensures the *Engine itself* works correctly.
* **Responsibilities:**
    * Writes unit and E2E tests for the engine's PR-generation logic and API interactions.
    * Operates in a Test-Driven Development (TDD) loop.

**E. Security Agent**
* **Role:** Ensures the Engine handles external GitHub tokens and user data securely.
* **Responsibilities:**
    * Audits the engine's code for vulnerabilities (SAST).
    * Prevents credentials from leaking into logs or PRs.

**F. Code Review Agent**
* **Role:** Ensures the code written for the Engine is high quality and maintainable.
* **Responsibilities:**
    * Reviews all code changes made to this repository before they are merged.

## Communication & Task Management
* **Linear Workspace:** We use Linear to track the roadmap and issues for building this Engine. The Orchestrator will create and update issues (e.g., in the "WORKER" team).
* **DevOps / Actions:** Continuous integration and deployment logic will be handled later by a specialized DevOps agent. For now, the focus is pure architectural scaffolding and script development.

## Core Templates
* `templates/site.config.template.js`: The blueprint for the SEO configuration that the engine will dynamically populate and push to target repositories.
