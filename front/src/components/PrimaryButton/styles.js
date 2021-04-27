// Styled Components
import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 30px;
  margin-top: 20px;
  font-family: 'AvenirRegular';
  cursor: ${({ enabled }) => (enabled ? 'pointer' : 'default')};
  background-color: ${({ enabled }) => (enabled ? '#000' : '#808080')};

  &:hover {
    background-color: ${({ enabled }) => (enabled ? 'rgba(0, 0, 0, 0.8)' : '#808080')};
  }
`;
