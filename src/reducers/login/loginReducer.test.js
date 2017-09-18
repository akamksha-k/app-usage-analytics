import authenticateUser from './loginReducer';

describe('login reducer', () => {
  const initialState = {
    firstname: null,
    lastname: null,
    roles: [],
    userID: 0,
    isManager: false,
    isAuthenticated: false,
    isAuthenticating: false,
    successMessage: null,
    failureMessage: null,
  };

  it('handles default state', () => {
    const action = {};

    expect(authenticateUser(undefined, {})).toEqual(initialState);
  });

  it('handles LOGIN_REQUEST action', () => {
    const action = { type: 'LOGIN_REQUEST' };
    const expectedState = {
      firstname: null,
      lastname: null,
      roles: [],
      userID: 0,
      isManager: false,
      isAuthenticated: false,
      isAuthenticating: true,
      successMessage: null,
      failureMessage: null,
    };

    expect(authenticateUser(initialState, action)).toEqual(expectedState);
  });

  it('handles LOGIN_SUCESS action', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      user: {
        firstname: 'terry',
        lastname: 'green',
        role: ['study-manager'],
        userID: 1,
        isManager: true,
      },
    };
    const expectedState = {
      firstname: 'terry',
      lastname: 'green',
      roles: ['study-manager'],
      userID: 1,
      isManager: true,
      isAuthenticated: true,
      isAuthenticating: false,
      successMessage: 'You have successfully logged in', // as Bob!
      failureMessage: null,
    };
    expect(authenticateUser(initialState, action)).toEqual(expectedState);
  });

  it('handles LOGIN_FAILURE action', () => {
    const action = { type: 'LOGIN_FAILURE', error: 'Bad credentials!' };
    const expectedState = {
      firstname: null,
      lastname: null,
      roles: [],
      userID: 0,
      isManager: false,
      isAuthenticated: false,
      isAuthenticating: false,
      successMessage: null,
      failureMessage: 'Login failed. Bad credentials!',
    };

    expect(authenticateUser(initialState, action)).toEqual(expectedState);
  });
});
