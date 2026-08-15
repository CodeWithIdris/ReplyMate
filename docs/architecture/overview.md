# Architecture Overview

ReplyMate is being built as a monorepo with a small engineering foundation for future product work.

## Current foundation

- pnpm workspaces
- Turborepo
- Next.js web app
- Fastify API
- shared types and config packages
- Supabase foundation directories
- documentation structure
- testing and CI scaffolding

## Scope

This module intentionally excludes business functionality, customer-facing workflows, and product features.
