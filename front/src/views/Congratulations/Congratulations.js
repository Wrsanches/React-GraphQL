// React
import React from 'react';

// Global Components
import { Container } from '../../components';

// Styled Components
import { Page, Title, Text, Description } from './styles';

// Svg
import { CheckSvg } from '../../components/Svg';

const Congratulations = () => {
  return (
    <Page>
      <Container title="Congratulations">
        <Title>
          <CheckSvg />
          <Text>Congratulations!</Text>
        </Title>

        <Description>
          You're about to lower your monthly auto loan payment! A loan officer will reach out to you shortly to discuss
          the final steps and confirm the loan offer.
        </Description>
      </Container>
    </Page>
  );
};

export default Congratulations;
