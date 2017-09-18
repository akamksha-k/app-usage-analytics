const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../../../config/config.json`)[env];

//============================Fetch Dashboard details By UserId==================

export function fetchRequest() {
  return { type: 'DASHBOARD_FETCH_REQUEST' };
}

export function fetchSuccess(result) {
  return { type: 'DASHBOARD_FETCH_SUCCESS', result };
}

export function fetchFailure(error) {
  return { type: 'DASHBOARD_FETCH_FAILURE', error };
}

function _setInitialState() {
  var action_Result = {
    activeProtocolsMessage: 'No Records Found',
    completedProtocolsMessage: 'No Records Found',
    statusCode: '',
    statusMessage: '',
    protocols: [],
    activeProtocols: [],
    completedProtocols: [],
    error: {},
  };
  return action_Result;
}

export function fetchDashboard(userId) {
  var action_Result = _setInitialState();
  return function(dispatch) {
    dispatch(fetchRequest());
    return fetch(`${config.Server_URL}/dashboard/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teame:eels'),
      },
    })
      .then(response => response.json())
      .then(fetch_res => {
        action_Result.statusCode = fetch_res.statusCode;
        action_Result.statusMessage = fetch_res.statusMessage;

        if (fetch_res.statusCode === 200) {
          const activeMessage =
            fetch_res.protocols.active.length === 0 ? 'No records found' : '';
          action_Result.activeProtocolsMessage = activeMessage;
          action_Result.activeProtocols = fetch_res.protocols.active;

          const completeMessage =
            fetch_res.protocols.complete.length === 0 ? 'No records found' : '';
          action_Result.completedProtocolsMessage = completeMessage;
          action_Result.completedProtocols = fetch_res.protocols.complete;

          dispatch(fetchSuccess(action_Result));
        } else {
          dispatch(fetchFailure(action_Result));
        }
      })
      .catch(error => {
        action_Result.error = error;
        dispatch(fetchFailure(error));
      });
  };
}
