// React
import React, { useState, useEffect } from 'react';

// Global Components
import { Container, PageTitle, LoanCard } from '../../components';

// Styled Components
import { LoanSelection } from './styles';

// Redux
import { useSelector } from 'react-redux';

// API
import { getLoans } from '../../api/loans';

const Loan = () => {
  const userId = useSelector((state) => state.auth.id);
  const token = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.auth.firstName);

  const [loans, setLoans] = useState();

  useEffect(() => {
    (async () => {
      const {
        data: { getLoans: data }
      } = await getLoans(token, userId);

      setLoans(data);
    })();
  }, [userId, token]);

  return (
    <Container title="Loan">
      <PageTitle primaryText={`Hello ${firstName}, select the loan you want to refinance`} />

      <LoanSelection>{loans && loans.map((item) => <LoanCard item={item} key={item.id} />)}</LoanSelection>
    </Container>
  );
};

export default Loan;
