import { describe, expect, it } from 'vitest';
import type { HealthResponse, AppEnvironment } from './index';

describe('shared types', () => {
  it('supports the health response contract', () => {
    const response: HealthResponse = { status: 'ok' };
    expect(response.status).toBe('ok');
  });

  it('supports app environment values', () => {
    const env: AppEnvironment = 'development';
    expect(env).toBe('development');
  });
});
