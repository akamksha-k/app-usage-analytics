const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../../../config/config.json`)[env];

//=======================Fetch All non study manger users ==========

export function fetchUserlistRequest() {
  return { type: 'Userlist_FETCH_REQUEST' };
}

export function fetchUserlistSuccess(result) {
  return { type: 'Userlist_FETCH_SUCCESS', result };
}

export function fetchUserlistFailure(error) {
  return { type: 'Userlist_FETCH_FAILURE', error };
}

export function fetchAllUsers() {
  return function(dispatch) {
    dispatch(fetchUserlistRequest());
    return fetch(`${config.Server_URL}/users/getAllUsers`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teame:eels'),
      },
    })
      .then(response => response.json())
      .then(fetch_res => {
        if (fetch_res.statusCode === 200) {
          dispatch(fetchUserlistSuccess(fetch_res));
        } else {
          dispatch(fetchUserlistFailure(fetch_res));
        }
      })
      .catch(error => {
        dispatch(fetchUserlistFailure(error));
      });
  };
}

//==============================End ==================================
