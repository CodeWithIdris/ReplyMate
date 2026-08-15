# Contributing to ReplyMate

## Development rules

- Inspect the relevant files before making changes.
- Do not invent requirements or architecture that were not approved.
- Do not expose secrets, tokens, API keys, or environment values.
- Keep business logic outside UI components.
- Use abstractions for AI providers and adapters for communication providers.
- Add tests for meaningful behavior.
- Do not implement product workflows outside the current module scope.
- Do not modify unrelated files.
- Do not claim completion without validation evidence.

## Module boundaries

This repository is currently in the engineering foundation phase. Keep work scoped to structure, tooling, and infrastructure only.

## Local validation

Run the following before finishing work:

- pnpm install
- pnpm format:check
- pnpm lint
- pnpm typecheck
- pnpm test
- pnpm test:e2e
- pnpm build
