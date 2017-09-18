import { push } from 'react-router-redux';
import { SM_KEY } from '../../constants';
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../../../config/config.json`)[env];

export function logoutUser() {
  return { type: 'LOGOUT_USER' };
}

export function loginRequest() {
  return { type: 'LOGIN_REQUEST' };
}

export function loginSuccess(user) {
  return { type: 'LOGIN_SUCCESS', user };
}

export function loginFailure(error) {
  return { type: 'LOGIN_FAILURE', error };
}

export function loginUser(username, password) {
  return function(dispatch) {
    dispatch(loginRequest());
    return fetch(`${config.Server_URL}/users/authenticate`, {
      method: 'POST',

      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teame:eels'),
      },
    })
      .then(response => response.json())
      .then(user => {
        if (user.statusCode === 200) {
          var userData = {
            firstname: user.firstname,
            lastname: user.lastname,
            userID: user.userID,
            role: user.role,
            isManager: false,
          };
          let userRoles = user.role;
          if (userRoles.length > 0) {
            for (var i = 0; i < userRoles.length; i++) {
              if (userRoles[i] === SM_KEY) {
                userData.isManager = true;
                break;
              }
            }
          }
          dispatch(loginSuccess(userData));
          dispatch(push('/dashboard'));
        } else {
          dispatch(loginFailure(user.statusMessage));
        }
      })
      .catch(error => {
        dispatch(loginFailure(error));
      });
  };
}
