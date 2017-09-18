const initialState = {
  users: [],
  statusCode: 0,
  successMessage: null,
  failureMessage: null,
  statusMessage: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'Userlist_FETCH_REQUEST':
      return Object.assign({}, state, {
        users: [],
        statusCode: 0,
        successMessage: null,
        failureMessage: null,
        statusMessage: 'Loading...',
      });

    case 'Userlist_FETCH_SUCCESS':
      return Object.assign({}, state, {
        users: action.result.users,
        statusCode: 200,
        successMessage: 'Users list fetched successfully',
        failureMessage: null,
        statusMessage: action.result.statusMessage,
      });

    case 'Userlist_FETCH_FAILURE':
      return Object.assign({}, state, {
        users: [],
        statusCode: action.error.statusCode,
        successMessage: null,
        failureMessage: action.error.statusMessage,
        statusMessage: action.error.statusMessage,
      });

    default:
      return state;
  }
}

export default userReducer;
