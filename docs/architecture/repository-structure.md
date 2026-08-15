# Repository Structure

## Monorepo layout

- apps/web: Next.js + TypeScript front end
- apps/api: Node.js + Fastify + TypeScript API
- packages/types: shared domain type contracts
- packages/config: shared config and compiler settings
- supabase/: deployment and migration foundations
- docs/: technical documentation and module records
- tests/: integration and E2E test foundations
- .github/workflows/: CI workflow definitions

## Purpose

This structure is intentionally minimal and infrastructure-first to support future product development without introducing business logic yet.
