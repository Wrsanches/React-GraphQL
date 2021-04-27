// React
import React from 'react';

// Common Components
import { SpecsTable } from '../common';

// Styled Components
import { Card, DescriptionView, Result, RadioInput } from './styles';

// Theme
import Typography from '../../theme/typography';

// External Packages
import PropTypes from 'prop-types';

const OfferCard = ({ item, onRadioChange }) => {
  const data = [
    { name: 'APR', value: item.apr },
    { name: 'Monthly payment', value: item.monthlyPayment },
    { name: 'Time remaining', value: `${item.timeRemaining} mo` }
  ];

  return (
    <Card>
      <DescriptionView>
        <SpecsTable data={data} />

        <Result>
          <Typography.H4>Lower your payment by {item.lowerPayment} per month</Typography.H4>
          <RadioInput name="offer" onChange={onRadioChange} type="radio" value={item.id} />
        </Result>
      </DescriptionView>
    </Card>
  );
};

OfferCard.propTypes = {
  item: PropTypes.object,
  onRadioChange: PropTypes.func
};

export default OfferCard;
