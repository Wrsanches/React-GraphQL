// React
import React from 'react';

// Styled Components
import { Button } from './styles';

// Svg
import { ArrowSvg } from '../Svg';

// External Packages
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <Button
      onClick={() => {
        history.goBack();
      }}>
      <ArrowSvg />
    </Button>
  );
};

export default BackButton;
