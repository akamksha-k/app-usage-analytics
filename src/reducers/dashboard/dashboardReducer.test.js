import dashboardReducer from './dashboardReducer';

describe('dashboard reducer', () => {
  const initialState = {
    activeProtocols: [],
    activeProtocolsMessage: 'Loading...',
    completedProtocols: [],
    failureMessage: null,
    completedProtocolsMessage: 'Loading...',
    statusCode: 0,
    successMessage: null,
  };

  it('handles default state', () => {
    const action = {};

    expect(dashboardReducer(undefined, {})).toEqual(initialState);
  });

  //============================ Tests for Fetch Dashboard Data by UserId======================

  it('handles DASHBOARD_FETCH_REQUEST action', () => {
    const action = { type: 'DASHBOARD_FETCH_REQUEST' };
    const expectedState = {
      activeProtocols: [],
      activeProtocolsMessage: 'Loading...',
      completedProtocols: [],
      failureMessage: null,
      completedProtocolsMessage: 'Loading...',
      statusCode: 0,
      successMessage: null,
    };

    expect(dashboardReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles DASHBOARD_FETCH_SUCCESS action', () => {
    const action = {
      type: 'DASHBOARD_FETCH_SUCCESS',
      result: {
        activeProtocols: [{ title: 'active title' }],
        completedProtocols: [{ title: 'complete title' }],
      },
    };

    const expectedState = {
      activeProtocols: [{ title: 'active title' }],
      activeProtocolsMessage: undefined,
      failureMessage: null,
      completedProtocols: [{ title: 'complete title' }],
      completedProtocolsMessage: undefined,
      statusCode: 200,
      successMessage: 'Fetched data successfully',
    };

    expect(dashboardReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles DASHBOARD_FETCH_FAILURE action', () => {
    const action = {
      type: 'DASHBOARD_FETCH_FAILURE',
      error: {
        statusCode: 400,
        successMessage: null,
        statusMessage: 'Fetching failed',
      },
    };
    const expectedState = {
      activeProtocols: [],
      activeProtocolsMessage: 'No Records Found',
      completedProtocols: [],
      failureMessage: 'Fetching failed',
      completedProtocolsMessage: 'No Records Found',
      protocol: {},
      statusCode: 400,
      successMessage: null,
    };

    expect(dashboardReducer(initialState, action)).toEqual(expectedState);
  });
});
