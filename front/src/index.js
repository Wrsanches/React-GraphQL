// React
import React from 'react';
import ReactDOM from 'react-dom';

// Analytics
import reportWebVitals from './reportWebVitals';

// Global Configs
import GlobalStyle from './assets/styles/global';
import GlobalFonts from './assets/fonts/fonts';

// Routes
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalFonts />
        {renderRoutes(routes)}
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
