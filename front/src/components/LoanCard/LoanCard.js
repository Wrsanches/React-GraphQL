// React
import React from 'react';

// Global Components
import PrimaryButton from '../PrimaryButton';

// Common Components
import { SpecsTable } from '../common';

// Styled Components
import { Card, ImageView, DescriptionView, CarImage, CarTitle, CarMiles, Number } from './styles';

// Theme
import Typography from '../../theme/typography';

// Image
import HondaAccord from '../../assets/images/vehicles/honda-accord.png';
import MercedesBens from '../../assets/images/vehicles/mercedes-benz.png';
import ChevroletCamaro from '../../assets/images/vehicles/chevrolet-camaro.png';

// External Packages
import PropTypes from 'prop-types';

// React Router
import { useHistory } from 'react-router-dom';

const LoanCard = ({ item }) => {
  const history = useHistory();

  const data = [
    { name: 'Lender', value: item.lender },
    { name: 'APR', value: item.apr },
    { name: 'Monthly payment', value: item.monthlyPayment },
    { name: 'Time remaining', value: `${item.timeRemaining} mo` }
  ];

  const carImage = () => {
    switch (item.image) {
      case 'honda-accord.png':
        return HondaAccord;

      case 'mercedes-benz.png':
        return MercedesBens;

      case 'chevrolet-camaro.png':
        return ChevroletCamaro;
    }
  };

  const onClick = () => {
    localStorage.setItem('vehicleSelected', `${item.year} ${item.vehicle}`);
    history.push(`/offer/${item.id}`);
  };

  return (
    <Card>
      <ImageView>
        <CarImage src={carImage()} />
      </ImageView>
      <DescriptionView>
        <CarTitle>
          <Typography.H4>{`${item.year} ${item.vehicle}`}</Typography.H4>
        </CarTitle>

        <CarMiles>
          <Typography.H6>
            with an estimated
            <Number>{item.miles}</Number>
            miles
          </Typography.H6>
        </CarMiles>

        <SpecsTable data={data} />

        <PrimaryButton enabled onChange={onClick} title="Select loan" />
      </DescriptionView>
    </Card>
  );
};

LoanCard.propTypes = {
  item: PropTypes.object
};

export default LoanCard;
