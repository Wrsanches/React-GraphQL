// React
import React, { useState, useEffect } from 'react';

// Global Components
import { Container, BackButton, PageTitle, OfferCard, PrimaryButton } from '../../components';

// Styled Components
import { OfferSelection, FinishView, FinishButton } from './styles';

// Redux
import { useSelector } from 'react-redux';

// React Router
import { useParams, useHistory } from 'react-router-dom';

// API
import { getOffers } from '../../api/offers';
import { addResult } from '../../api/result';

const Offer = () => {
  const history = useHistory();

  const { loanId } = useParams();
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.id);

  const [offers, setOffers] = useState();
  const [selectedOffer, setSelectedOffer] = useState();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    (async () => {
      const {
        data: { getOffers: data }
      } = await getOffers(token, loanId);

      setOffers(data);
    })();
  }, [token, loanId]);

  const handleRadioChange = (e) => {
    setIsButtonEnabled(true);
    setSelectedOffer(e.currentTarget.value);
  };

  const onClick = async () => {
    await addResult(token, selectedOffer, loanId, userId);
    history.push('/congrats');
  };

  return (
    <Container title="Offer">
      <BackButton />
      <PageTitle primaryText="Select a new loan" secondaryText={`for the ${localStorage.getItem('vehicleSelected')}`} />

      <OfferSelection>
        {offers && offers.map((item) => <OfferCard item={item} onRadioChange={handleRadioChange} />)}
      </OfferSelection>

      <FinishView>
        <FinishButton>
          <PrimaryButton enabled={isButtonEnabled} onChange={onClick} title="Finish" />
        </FinishButton>
      </FinishView>
    </Container>
  );
};

export default Offer;
