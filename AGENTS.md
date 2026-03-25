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

---

## 🤖 The AI Working Department Standards

This repository utilizes a standardized "AI Working Department" model for development. **ANY AI assistant or LLM operating in this codebase MUST read and strictly adhere to the following standards before taking action:**

1. **Read the Universal Protocol:** `cat .ai/universal-protocol.md`
   * *This file dictates how you interact with the user, use the issue tracker, and announce your personas.*
2. **Review the Persona Roles and Skills:** `cat .ai/department-roles.md`
   * *This file defines the exact "hats" you must wear and the specific OpenCode Skills (tools) you are authorized to use for each role.*

## Skill Development Strategy
As we build out this engine, we will create folders in `.opencode/skills/` corresponding to the Skill Targets listed in `.ai/department-roles.md`. Each folder will contain a `SKILL.md` file that explicitly instructs OpenCode on how to perform that specific analysis or injection task.

## Communication & Task Management
* **Linear Workspace:** We use Linear to track the roadmap and issues for building this Engine. The Orchestrator will create and update issues.
* **DevOps / Actions:** Continuous integration and deployment logic will be handled in a later phase.
