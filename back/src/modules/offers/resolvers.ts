// External Packages
import { GraphQLDateTime } from 'graphql-custom-types';

// Utils
import { compose } from '../../utils/composable';
import { authResolver } from '../../utils/auth';

// Entities
import { Loans } from '../../entities/Loans';
import { Offers } from '../../entities/Offers';

export const resolvers = {
  Query: {
    // Get Offers
    getOffers: compose(authResolver)(async (_: any, args: any) => {
      const { loanId } = args;
      const offers = await Offers.find({ loans: loanId });

      if (offers.length > 0) {
        return offers;
      } else {
        const months = [60, 72, 84];
        const loan = await Loans.findOne({ id: loanId });

        if (loan !== undefined) {
          const loanBalance = loan.loanBalance;
          const apr = parseFloat(loan.apr);
          const oldMonthlyPayment = parseFloat(
            loan.monthlyPayment.replace('$', '')
          );

          for (let i = 0; i < months.length; ++i) {
            const month = months[i];
            const calcAPR = apr / 100 / 12;
            const calcAPRMonth = Math.pow(1 + calcAPR, month);

            const newMonthlyPayment = Number(
              (
                (loanBalance * calcAPR * calcAPRMonth) /
                (calcAPRMonth - 1)
              ).toFixed(2)
            );

            const offer = new Offers();
            offer.apr = `${String(apr / 2)}%`;
            offer.monthlyPayment = `$${String(newMonthlyPayment)}`;
            offer.timeRemaining = String(month);
            offer.lowerPayment = `$${(
              oldMonthlyPayment - newMonthlyPayment
            ).toFixed(2)}`;
            offer.loans = loanId;
            await offer.save();
          }
        }

        return await Offers.find({ loans: loanId });
      }
    }),
  },
  GraphQLDateTime,
};
