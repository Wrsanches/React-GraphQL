// Styled Components
import styled from 'styled-components';

// Pallete
import pallete from './pallete';

const H1 = styled.h1`
  display: flex;
  flex-direction: row;
  color: ${pallete.primary.main};
  font-size: 24px;
  font-family: 'AvenirBlack';
`;

const H2 = styled.h2`
  display: flex;
  flex-direction: row;
  color: ${pallete.primary.main};
  font-size: 20px;
  font-family: 'AvenirBlack';
`;

const H3 = styled.h3`
  display: flex;
  flex-direction: row;
  color: ${pallete.primary.main};
  font-size: 16px;
  font-family: 'AvenirBlack';
`;

const H4 = styled.h4`
  display: flex;
  flex-direction: row;
  color: ${pallete.primary.main};
  font-size: 14px;
  font-family: 'AvenirBlack';
`;

const H5 = styled.h5`
  display: flex;
  flex-direction: row;
  color: ${pallete.primary.light};
  font-size: 14px;
  font-family: 'AvenirBlack';
`;

const H6 = styled.h6`
  display: flex;
  flex-direction: row;
  color: ${pallete.primary.light};
  font-size: 12px;
  font-family: 'AvenirRegular';
`;

const typography = { H1, H2, H3, H4, H5, H6 };

export default typography;
