// React
import React from 'react';

// Styled Components
import { Title, PrimaryText, SecondaryText } from './styles';

// External Packages
import PropTypes from 'prop-types';

const PageTitle = ({ primaryText, secondaryText }) => {
  return (
    <Title>
      <PrimaryText>
        {primaryText}
        <SecondaryText>{secondaryText}</SecondaryText>
      </PrimaryText>
    </Title>
  );
};

PageTitle.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string
};

export default PageTitle;
