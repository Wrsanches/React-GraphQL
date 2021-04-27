// API
import api from '../utils/axios';

export const getLoans = async (token, userId) => {
  const { data } = await api.post(
    '/graphql',
    {
      query: `
        query getLoans($userId: Int!) {
          getLoans(userId: $userId) {
            id
            vehicle
            image
            year
            miles
            lender
            apr
            loanBalance
            monthlyPayment
            timeRemaining
          }
        }
      `,
      variables: { userId: parseInt(userId) }
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
