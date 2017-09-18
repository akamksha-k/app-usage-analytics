import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import root from './rootReducer';

export default function configureStore(history) {
  const store = createStore(
    root,
    applyMiddleware(thunk, routerMiddleware(history)),
    autoRehydrate()
  );

  persistStore(store);

  return store;
}
