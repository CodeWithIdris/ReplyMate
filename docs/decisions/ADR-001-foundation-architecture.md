# ADR 001: Foundation Architecture

- Status: Accepted
- Date: 2026-08-14

## Context

ReplyMate requires a clean engineering foundation before implementing product features. The repository needs a monorepo structure with separate application and shared package boundaries, along with infrastructure for testing, documentation, and CI.

## Decision

We will use:

- pnpm workspaces
- Turborepo
- apps/web with Next.js + TypeScript
- apps/api with Node.js + Fastify + TypeScript
- packages/types and packages/config
- Supabase foundation directories
- docs and tests scaffolding
- GitHub Actions CI

## Consequences

This keeps the implementation minimal and leaves business logic for later modules. It also supports a clean path for future product work without introducing feature-specific code in Module 1.
