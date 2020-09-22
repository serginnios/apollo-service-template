import express from 'express';

import createApolloServer from '@/graphql/apolloServer';

async function start() {
  const app = express();

  const apolloServer = await createApolloServer();
  apolloServer.applyMiddleware({ app });

  const port = 4002;

  app.listen({ port }, () => {
    console.log(`🚀  Server ready at http://localhost:${port}/graphql`);
  });
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
