// Styled Components
import { createGlobalStyle } from 'styled-components';

// Fonts
import AvenirBlack from './AvenirBlack.otf';
import AvenirRegular from './AvenirRegular.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'AvenirBlack';
        src: local('AvenirBlack'), local('AvenirBlack'),
        url(${AvenirBlack}) format('opentype');
    }

    @font-face {
        font-family: 'AvenirRegular';
        src: local('AvenirRegular'), local('AvenirRegular'),
        url(${AvenirRegular}) format('opentype');
    }
`;
