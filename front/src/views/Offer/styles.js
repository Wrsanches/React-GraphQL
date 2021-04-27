// Styled Components
import styled from 'styled-components';

export const OfferSelection = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FinishView = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const FinishButton = styled.div`
  width: 350px;
`;
