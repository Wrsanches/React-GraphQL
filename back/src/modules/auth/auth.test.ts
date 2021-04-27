// Path
import * as path from 'path';

// GraphQL
import {
  makeExecutableSchema,
  loadTypedefsSync,
  GraphQLFileLoader,
} from 'graphql-tools';

import { graphql } from 'graphql';
import { gql } from 'apollo-server-express';

// TypeORM
import { createConnection, getConnection } from 'typeorm';

// Resolver
import { resolvers } from './resolvers';

const data = {
  query: `
    query login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
         token
      }
    }
  `,
  variables: { username: 'demo', password: 'demo' },
  context: {},
};

beforeEach(async () => {
  await createConnection();
});

afterAll(async () => {
  await getConnection().close();
});

describe('Login ', () => {
  const sources = loadTypedefsSync(path.join(__dirname, `../auth/schema.gql`), {
    loaders: [new GraphQLFileLoader()],
  });

  const typeDefs = sources.map((source) => source.document);

  const schema = makeExecutableSchema({
    typeDefs: gql`
      ${typeDefs[0]}
    `,
    resolvers,
  });

  const { query, variables, context } = data;

  test('Token', async () => {
    const result = await graphql(schema, query, null, context, variables);
    return expect(typeof result!.data!.login.token).toBe('string');
  });
});
