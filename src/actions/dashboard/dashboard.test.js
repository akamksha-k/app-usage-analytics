import { fetchRequest, fetchSuccess, fetchFailure } from './dashboard';

describe('checks dashboard', () => {
  //===============Fetch Protocol data by id===============
  it('handles fetchRequest action creator', () => {
    const action = { type: 'DASHBOARD_FETCH_REQUEST' };
    expect(fetchRequest()).toEqual(action);
  });

  it('handles fetchSuccess action creator', () => {
    const action = {
      type: 'DASHBOARD_FETCH_SUCCESS',
      result: {
        statusCode: 200,
        statusMessage: 'Data successfully sent',
      },
    };

    expect(
      fetchSuccess({
        statusCode: 200,
        statusMessage: 'Data successfully sent',
      })
    ).toEqual(action);
  });

  it('handles fetchFailure action creator', () => {
    const action = { type: 'DASHBOARD_FETCH_FAILURE', error: 'No Data' };
    expect(fetchFailure('No Data')).toEqual(action);
  });
});
