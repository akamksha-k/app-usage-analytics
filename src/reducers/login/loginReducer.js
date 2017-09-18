const initialState = {
  firstname: null,
  lastname: null,
  userID: 0,
  roles: [],
  isManager: false,
  isAuthenticated: false,
  isAuthenticating: false,
  successMessage: null,
  failureMessage: null,
};

function authenticateUser(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        firstname: null,
        lastname: null,
        userID: 0,
        isManager: false,
        isAuthenticating: true,
        isAuthenticated: false,
        successMessage: null,
        failureMessage: null,
      });
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        firstname: action.user.firstname,
        lastname: action.user.lastname,
        userID: action.user.userID,
        roles: action.user.role,
        isManager: action.user.isManager,
        isAuthenticating: false,
        isAuthenticated: true,
        successMessage: `You have successfully logged in`,
        failureMessage: null,
      });
    case 'LOGIN_FAILURE':
      return Object.assign({}, state, {
        firstname: null,
        lastname: null,
        userID: 0,
        roles: [],
        isManager: false,
        isAuthenticating: false,
        isAuthenticated: false,
        successMessage: null,
        failureMessage: `Login failed. ${action.error}`,
      });
    default:
      return state;
  }
}

export default authenticateUser;
