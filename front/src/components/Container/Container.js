// React
import React from 'react';

// Styled Component
import { Page, SafeArea } from './styles';

// External Packages
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Container = ({ title, children }) => {
  return (
    <Page>
      <Helmet>
        <title>{`${title} - With Clutch`}</title>
      </Helmet>
      <SafeArea>{children}</SafeArea>
    </Page>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Container;
