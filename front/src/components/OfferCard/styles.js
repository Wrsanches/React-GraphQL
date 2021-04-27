// Styled Components
import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  height: 270px;
  margin: 20px 60px 20px 0;
  background-color: white;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    height: 245px;
    margin: 20px 0 0 0;
  }
`;

export const DescriptionView = styled.div``;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const RadioInput = styled.input``;
