import 'reflect-metadata';

import * as dotenv from 'dotenv';

import http from 'http';
import express from 'express';
import schemas from './utils/schemas';

import { ApolloServer } from 'apollo-server-express';
import { mergeSchemas } from 'graphql-tools';
import { createConnection } from 'typeorm';

(async () => {
  dotenv.config();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: mergeSchemas({ schemas }),
    context: ({ req, res }) => ({ req, res }),
  });
  apolloServer.applyMiddleware({ app, cors: true });

  const httpServer = http.createServer(app);

  app.get('/status', (_req, res) => {
    res.json({ status: 'OK' });
  });

  const port = process.env.PORT || 3000;

  createConnection().then(() => {
    httpServer.listen(port, () => {
      console.log(`🚀 Server started at http://localhost:${port}/graphql`);
    });
  });
})();
