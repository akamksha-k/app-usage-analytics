const initialState = {
  activeProtocols: [],
  completedProtocols: [],
  statusCode: 0,
  successMessage: null,
  activeProtocolsMessage: 'Loading...',
  completedProtocolsMessage: 'Loading...',
  failureMessage: null,
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'DASHBOARD_FETCH_REQUEST':
      return Object.assign({}, state, {
        activeProtocols: [],
        completedProtocols: [],
        statusCode: 0,
        successMessage: null,
        activeProtocolsMessage: 'Loading...',
        completedProtocolsMessage: 'Loading...',
        failureMessage: null,
      });

    case 'DASHBOARD_FETCH_SUCCESS':
      return Object.assign({}, state, {
        activeProtocols: action.result.activeProtocols,
        completedProtocols: action.result.completedProtocols,
        statusCode: 200,
        successMessage: 'Fetched data successfully',
        activeProtocolsMessage: action.result.activeProtocolsMessage,
        completedProtocolsMessage: action.result.completedProtocolsMessage,
        failureMessage: null,
      });

    case 'DASHBOARD_FETCH_FAILURE':
      return Object.assign({}, state, {
        protocol: {},
        statusCode: action.error.statusCode,
        successMessage: null,
        activeProtocolsMessage: 'No Records Found',
        completedProtocolsMessage: 'No Records Found',
        failureMessage: action.error.statusMessage,
      });
    default:
      return state;
  }
}

export default dashboardReducer;
