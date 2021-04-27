// React
import React from 'react';

// Styled Components
import { Button } from './styles';

// External Packages
import PropTypes from 'prop-types';

// React Router
import { Link } from 'react-router-dom';

const PrimaryButton = ({ to, onChange, enabled, title }) => {
  return (
    <Link to={enabled && onChange === undefined && to}>
      <Button enabled={enabled} onClick={onChange}>
        {title}
      </Button>
    </Link>
  );
};

PrimaryButton.propTypes = {
  enabled: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default PrimaryButton;
