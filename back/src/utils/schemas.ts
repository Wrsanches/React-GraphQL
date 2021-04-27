// External Packages
import * as fs from 'fs';
import * as path from 'path';

import { GraphQLSchema } from 'graphql';
import { gql } from 'apollo-server-express';
import {
  makeExecutableSchema,
  loadTypedefsSync,
  GraphQLFileLoader,
} from 'graphql-tools';

const schemas: GraphQLSchema[] = [];
const folders = fs.readdirSync(path.join(__dirname, '../modules'));

folders.forEach((folder) => {
  const { resolvers } = require(`../modules/${folder}/resolvers`);
  const sources = loadTypedefsSync(
    path.join(__dirname, `../modules/${folder}/schema.gql`),
    { loaders: [new GraphQLFileLoader()] }
  );

  const typeDefs = sources.map((source) => source.document);

  schemas.push(
    makeExecutableSchema({
      typeDefs: gql`
        ${typeDefs[0]}
      `,
      resolvers,
    })
  );
});

export default schemas;
