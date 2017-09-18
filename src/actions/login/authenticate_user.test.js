import {
  logoutUser,
  loginRequest,
  loginSuccess,
  loginFailure,
} from './authenticate_user';

describe('authenticate user', () => {
  it('handles logoutUser action creator', () => {
    const action = { type: 'LOGOUT_USER' };

    expect(logoutUser()).toEqual(action);
  });

  it('handles loginRequest action creator', () => {
    const action = { type: 'LOGIN_REQUEST' };

    expect(loginRequest()).toEqual(action);
  });

  it('handles loginSuccess action creator', () => {
    const action = { type: 'LOGIN_SUCCESS', user: { name: 'Bob', id: 2 } };

    expect(loginSuccess({ name: 'Bob', id: 2 })).toEqual(action);
  });

  it('handles loginFailure action creator', () => {
    const action = { type: 'LOGIN_FAILURE', error: 'Bad credentials!' };

    expect(loginFailure('Bad credentials!')).toEqual(action);
  });
});
