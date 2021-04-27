// Styled Components
import styled from 'styled-components';

// Typography
import Typography from '../../theme/typography';

export const Card = styled.div`
  width: 300px;
  height: 530px;
  border-radius: 30px;
  margin: 40px 40px 0 0;
  background-color: white;
  box-shadow: 1px 4px 15px 1px #eaeaea;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin: 40px 0px 20px 0;
  }
`;

export const ImageView = styled.div`
  height: 30%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-image: linear-gradient(#555b62, white);

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DescriptionView = styled.div`
  height: 70%;
  padding: 30px 20px;
`;

export const CarImage = styled.img`
  max-width: 300px;
`;

export const CarTitle = styled.div`
  margin-bottom: 10px;
`;

export const CarMiles = styled.div``;

export const Number = styled(Typography.H4)`
  margin: 0 5px;
`;
