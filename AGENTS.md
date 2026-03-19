# AI Agent Workflow Context and Architecture: Landing Page Visibility Engine

This document serves as the ground truth and working context for all AI agents, Large Language Models (LLMs), and automated workflows operating within **this repository**.

**DO NOT MODIFY THIS FILE WITHOUT EXPLICIT APPROVAL FROM THE USER.**

## Project Goal

This repository is an **Agentic SEO and Visibility Engine**. It is a reusable tool that points at *existing* target repositories (e.g., Next.js landing pages), analyzes them, and automatically improves their online discoverability (search engines, web bots, social networks).

The ultimate goal of this engine is to:
1. Fetch and clone an existing, external target codebase.
2. Use specialized sub-agents equipped with OpenCode Skills to analyze the code for SEO deficiencies, speed, and social media readiness.
3. Automatically generate configurations, layout updates, or metadata injections for the target repository.
4. Open PRs or create Linear tasks for the target project to implement the suggested improvements.

## The Agent Team and OpenCode Skills

To build and operate this engine, we use OpenCode and its built-in `skill` tool. Each agent role represents a distinct capability that will eventually be codified into an OpenCode Skill (`.opencode/skills/<skill-name>/SKILL.md`).

### 1. The Orchestrator Agent (The Manager)
* **Role:** Parses incoming requests for a target repository and coordinates the workflow.
* **Skill Target:** `orchestrate-seo-engine`
* **Responsibilities:**
    * Coordinates the execution of specialized skills.
    * Manages Linear tasks to track the progress of the analysis.
    * Triggers PR creation when sub-agent analysis is complete.

### 2. Specialized Sub-Agents

**A. Researcher Agent (The SEO Brain)**
* **Role:** Analyzes the target website's content and industry.
* **Skill Target:** `seo-researcher`
* **Responsibilities:**
    * Web search for competitor analysis and keyword research.
    * Defines target demographics and required metadata variables.

**B. Frontend Agent (The Injector)**
* **Role:** Analyzes the target codebase's frontend framework (currently Next.js).
* **Skill Target:** `frontend-injector`
* **Responsibilities:**
    * Analyzes target structure (e.g., `app/layout.tsx`).
    * Generates code diffs to inject dynamic SEO meta tags and Open Graph data.

**C. Backend & Database Agent (The Automator)**
* **Role:** Builds social media and bot automation features (Phase 2).
* **Skill Target:** `social-automator`
* **Responsibilities:**
    * Handles APIs to publish SEO comments or auto-post images.

**D. Tester Agent**
* **Role:** Ensures the *Engine itself* works correctly.
* **Skill Target:** `engine-tester`
* **Responsibilities:**
    * Validates that the engine outputs correct PR structures and config files.

**E. Security Agent**
* **Role:** Ensures the Engine handles external tokens securely.
* **Skill Target:** `security-auditor`
* **Responsibilities:**
    * Prevents secrets from leaking into logs or PRs during target analysis.

**F. Code Review Agent**
* **Role:** Reviews code changes on the target repo before the PR is opened.
* **Skill Target:** `code-reviewer`
* **Responsibilities:**
    * Checks the proposed SEO injections for syntax errors or anti-patterns.

## Skill Development Strategy
As we build out this engine, we will create folders in `.opencode/skills/` corresponding to the Skill Targets listed above. Each folder will contain a `SKILL.md` file that explicitly instructs OpenCode on how to perform that specific analysis or injection task.

## Communication & Task Management
* **Linear Workspace:** We use Linear to track the roadmap and issues for building this Engine. The Orchestrator will create and update issues (e.g., in the "WORKER" team).
* **DevOps / Actions:** Continuous integration and deployment logic will be handled in a later phase.
