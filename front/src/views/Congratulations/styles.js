// Styled Components
import styled from 'styled-components';

// Typography
import Typography from '../../theme/typography';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

export const Title = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Text = styled(Typography.H1)`
  color: white;
`;

export const Description = styled(Typography.H2)`
  max-width: 600px;
  color: #636363;
  font-size: 14px;
  line-height: 22px;
  margin-top: 20px;
  font-family: 'AvenirRegular';

  @media (max-width: 500px) {
    width: 100%;
  }
`;
