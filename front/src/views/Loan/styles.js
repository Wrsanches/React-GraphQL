// Styled Components
import styled from 'styled-components';

export const LoanSelection = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
