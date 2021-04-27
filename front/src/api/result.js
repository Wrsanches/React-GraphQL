// API
import api from '../utils/axios';

export const addResult = async (token, offerId, loanId, userId) => {
  const { data } = await api.post(
    '/graphql',
    {
      query: `
        mutation addResult($offerId: Int!, $loanId: Int!, $userId: Int!) {
          addResult(offerId: $offerId, loanId: $loanId, userId: $userId)
        }
      `,
      variables: { offerId: parseInt(offerId), loanId: parseInt(loanId), userId: parseInt(userId) }
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
