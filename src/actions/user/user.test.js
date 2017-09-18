import {
  fetchUserlistRequest,
  fetchUserlistSuccess,
  fetchUserlistFailure,
  
} from './user';

describe('Fetch users list', () => {
  it('handles Userlist fetch request action crator', () => {
    const action = { type: 'Userlist_FETCH_REQUEST' };
    expect(fetchUserlistRequest()).toEqual(action);
  });

  it('handles Userlist fetch success action creator', () => {
    const action = {
      type: 'Userlist_FETCH_SUCCESS',
      result: {
        statusCode: 200,
        statusMessage: 'Userlist fetched successfully',
      },
    };

    expect(
      fetchUserlistSuccess({
        statusCode: 200,
        statusMessage: 'Userlist fetched successfully',
      })
    ).toEqual(action);
  });

  it('handles Userlist fetch failure action creator', () => {
    const action = { type: 'Userlist_FETCH_FAILURE', error: 'Failed to find users' };
    expect(fetchUserlistFailure('Failed to find users')).toEqual(action);
  });
}); 
 