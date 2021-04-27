// Styled Components
import styled from 'styled-components';

// Typography
import Typography from '../../../theme/typography';

export const Table = styled.div`
  margin-top: 40px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border: none;
  }
`;

export const Name = styled(Typography.H5)`
  margin-bottom: 15px;
  font-family: 'AvenirRegular';
`;

export const Value = styled(Typography.H4)``;
