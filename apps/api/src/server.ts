import Fastify from 'fastify';

export const app = Fastify({ logger: false });

app.get('/health', async () => ({ status: 'ok' }));

export const start = async () => {
  try {
    const address = await app.listen({ port: 3001, host: '0.0.0.0' });
    console.log(`API listening on ${address}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

if (process.env.NODE_ENV !== 'test') {
  void start();
}
