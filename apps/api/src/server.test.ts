import { describe, expect, it } from 'vitest';
import { app } from './server';

describe('API health', () => {
  it('returns ok status from the health endpoint', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/health'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'ok' });
  });
});
