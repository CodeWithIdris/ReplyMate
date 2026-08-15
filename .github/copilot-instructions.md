# ReplyMate Copilot Instructions

## Core repository rules

- Inspect the relevant files before making changes.
- Do not invent requirements or architecture that were not already approved.
- Do not expose or hardcode secrets, API keys, tokens, or environment values.
- Maintain strict tenant isolation and never mix data across tenants.
- Do not bypass Row Level Security (RLS) in database access patterns.
- Keep business logic outside UI components; UI code should render and delegate.
- Use abstractions for AI providers and adapters for communication providers.
- Significant features require tests before completion.
- ReplyMate must NEVER automatically message customers.
- Do not add unnecessary dependencies or unrelated files.
- Do not modify unrelated files.
- Do not claim completion without validation evidence.

## Module 1 scope

- Keep implementation focused on engineering foundation only.
- No authentication, users, workspaces, customers, conversations, messages, WhatsApp integrations, AI, memory, events, reminders, notifications, analytics, billing, dashboards, or business database tables.
- No product workflows beyond the approved foundation.

## Working standards

- Prefer minimal, clean, and explicit code.
- Keep configuration readable and consistent across the monorepo.
- Ensure tests exist for meaningful behavior.
- Keep the repository in a valid, buildable state.
