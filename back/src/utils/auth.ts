// External Packages
import * as jwt from 'jsonwebtoken';

import { promisify } from 'util';
import { pbkdf2Sync } from 'pbkdf2';
import { GraphQLFieldResolver } from 'graphql';
import { ComposableResolver } from './composable';

export const authResolver: ComposableResolver<any, any> = (
  resolver: GraphQLFieldResolver<any, any>
): GraphQLFieldResolver<any, any> => {
  return async (parent, args, context: any, info) => {
    const {
      req: {
        headers: { authorization },
      },
    } = context;

    if (!authorization) {
      throw new Error('Token not provided');
    }

    const [, token] = authorization.split(' ');

    try {
      await promisify(jwt.verify)(token, process.env.JWT_SECRET!);

      return resolver(parent, args, context, info);
    } catch (err) {
      throw new Error('Invalid token');
    }
  };
};

export const hashPassword = (pass: string) => {
  const iterations = 100000;
  const salt = '87KUAj8SaGZw';
  const hash = pbkdf2Sync(pass, salt, iterations, 32, 'sha256').toString(
    'base64'
  );

  return `pbkdf2_sha256$${iterations}$${salt}$${hash}`;
};
