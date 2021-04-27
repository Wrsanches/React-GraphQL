// External Packages
import * as jwt from 'jsonwebtoken';

import { pbkdf2Sync } from 'pbkdf2';
import { GraphQLDateTime } from 'graphql-custom-types';

// Utils
import { compose } from '../../utils/composable';
import { authResolver, hashPassword } from '../../utils/auth';

// Entities
import { AuthUser } from '../../entities/AuthUser';

export const resolvers = {
  Query: {
    // Validate Token
    validateToken: compose(authResolver)(() => {
      return true;
    }),
    // Login
    async login(_: any, args: any) {
      const validatePassword = (key: string, pass: string) => {
        const parts = pass.split('$');
        const iterations = parseInt(parts[1], 10);
        const salt = parts[2];

        return (
          pbkdf2Sync(key, salt, iterations, 32, 'sha256').toString('base64') ===
          parts[3]
        );
      };

      const { username, password } = args;

      const user = await AuthUser.findOne({ username });

      if (user === undefined) {
        throw new Error('User not found');
      } else {
        if (!validatePassword(password, user.password)) {
          throw new Error('Password incorrect');
        } else {
          const token = jwt.sign({}, process.env.JWT_SECRET!, {
            expiresIn: process.env.JWT_TTL,
          });

          return {
            user,
            token,
          };
        }
      }
    },
  },
  Mutation: {
    // Create User
    createUser: compose(authResolver)(async (_: any, args: any) => {
      const { firstName, lastName, username, email, password } = args;

      const auth = new AuthUser();
      auth.firstName = firstName;
      auth.lastName = lastName;
      auth.username = username;
      auth.email = email;
      auth.password = hashPassword(password);
      await auth.save();

      return 'User Created';
    }),
  },
  GraphQLDateTime,
};
