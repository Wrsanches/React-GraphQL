// API
import api from '../utils/axios';

export const getOffers = async (token, loanId) => {
  const { data } = await api.post(
    '/graphql',
    {
      query: `
        query getOffers($loanId: Int!) {
          getOffers(loanId: $loanId) {
            id
            apr
            monthlyPayment
            timeRemaining
            lowerPayment
          }
        }
      `,
      variables: { loanId: parseInt(loanId) }
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  );

  return data;
};
