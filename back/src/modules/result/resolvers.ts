// External Packages
import { GraphQLDateTime } from 'graphql-custom-types';

// Utils
import { compose } from '../../utils/composable';
import { authResolver } from '../../utils/auth';

// Entities
import { Result } from '../../entities/Result';

export const resolvers = {
  Mutation: {
    // Add Result
    addResult: compose(authResolver)(async (_: any, args: any) => {
      const { offerId, loanId, userId } = args;

      const result = await Result.findOne({ loan: loanId, authUser: userId });

      if (result === undefined) {
        const result = new Result();
        result.loan = loanId;
        result.offer = offerId;
        result.authUser = userId;
        await result.save();
      } else {
        result.offer = offerId;
        await result.save();
      }

      return 'Offer Saved';
    }),
  },
  GraphQLDateTime,
};
