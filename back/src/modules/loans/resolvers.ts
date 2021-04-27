// External Packages
import { GraphQLDateTime } from 'graphql-custom-types';

// Utils
import { compose } from '../../utils/composable';
import { authResolver } from '../../utils/auth';

// Entities
import { Loans } from '../../entities/Loans';

export const resolvers = {
  Query: {
    // Get Loans
    getLoans: compose(authResolver)(async (_: any, args: any) => {
      const { userId } = args;
      return await Loans.find({ authUser: userId });
    }),
  },
  GraphQLDateTime,
};
