import userReducer from './userReducer';

describe('user reducer', () => {
  const initialState = {
    users: [],
    statusCode: 0,
    successMessage: null,
    failureMessage: null,
    statusMessage: '',
  };

  it('handles default state', () => {
    const action = {};

    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('handles Userlist_FETCH_REQUEST action', () => {
    const action = { type: 'Userlist_FETCH_REQUEST' };
    const expectedState = {
      users: [],
      statusCode: 0,
      successMessage: null,
      failureMessage: null,
      statusMessage: 'Loading...',
    };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles Userlist_FETCH_SUCCESS action', () => {
    const action = {
      type: 'Userlist_FETCH_SUCCESS',
      result: { users: [{ user: 'Robert' }] },
    };
    const expectedState = {
      users: [{ user: 'Robert' }],
      statusCode: 200,
      successMessage: 'Users list fetched successfully',
      failureMessage: null,
      statusMessage: action.result.statusMessage,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles Userlist_FETCH_FAILURE action', () => {
    const action = {
      type: 'Userlist_FETCH_FAILURE',
      error: {
        statusCode: 400,
        successMessage: null,
        statusMessage: '',
        failureMessage: '',
        users: undefined,
      },
    };
    const expectedState = {
      statusCode: 400,
      successMessage: null,
      statusMessage: '',
      failureMessage: '',
      users: [],
    };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });
});
