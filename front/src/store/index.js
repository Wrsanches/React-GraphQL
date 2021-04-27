// Redux
import { createStore, applyMiddleware } from 'redux';

// Redux Saga
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

// Redux Persist
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// Combine Reducers
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  keyPrefix: '',
  storage: storage
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
