import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import session from '../reducers/login/loginReducer';
import protocolReducer from '../reducers/protocol/protocolReducer';
import dashboardReducer from '../reducers/dashboard/dashboardReducer';
import userReducer from '../reducers/user/userReducer';

const appReducer = combineReducers({
  session,
  protocolReducer,
  dashboardReducer,
  userReducer,
  router: routerReducer,
});

const root = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default root;
