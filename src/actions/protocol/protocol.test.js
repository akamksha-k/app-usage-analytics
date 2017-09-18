import {
  saveRequest,
  saveSuccess,
  saveFailure,
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  changeProtocolSectionStateRequest,
  changeProtocolSectionStateSuccess,
  changeProtocolSectionStateFailure,
  changeProtocolStateRequest,
  changeProtocolStateSuccess,
  changeProtocolStateFailure,
  fetchPreviewRequest,
  fetchPreviewSuccess,
  fetchPreviewFailure,
} from './protocol';

describe('create protocol', () => {
  it('handles saveRequest action creator', () => {
    const action = { type: 'PROTOCOL_SAVE_REQUEST' };
    expect(saveRequest()).toEqual(action);
  });

  it('handles saveSuccess action creator', () => {
    const action = {
      type: 'PROTOCOL_SAVE_SUCCESS',
      result: {
        statusCode: 200,
        statusMessage: 'Data successfully inserted',
      },
    };

    expect(
      saveSuccess({
        statusCode: 200,
        statusMessage: 'Data successfully inserted',
      })
    ).toEqual(action);
  });

  it('handles saveFailure action creator', () => {
    const action = { type: 'PROTOCOL_SAVE_FAILURE', error: 'Data conflict' };
    expect(saveFailure('Data conflict')).toEqual(action);
  });
  //===============Fetch Protocol data by id===============
  it('handles fetchRequest action creator', () => {
    const action = { type: 'PROTOCOL_FETCH_REQUEST' };
    expect(fetchRequest()).toEqual(action);
  });

  it('handles fetchSuccess action creator', () => {
    const action = {
      type: 'PROTOCOL_FETCH_SUCCESS',
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
    const action = { type: 'PROTOCOL_FETCH_FAILURE', error: 'No Data' };
    expect(fetchFailure('No Data')).toEqual(action);
  });

  it('handles change ProtocolSection State Request action creator', () => {
    const action = { type: 'CHANGE_PROTOCOL_SECTION_STATE_REQUEST' };
    expect(changeProtocolSectionStateRequest()).toEqual(action);
  });

  it('handles change ProtocolSection State Success action creator', () => {
    const action = {
      type: 'CHANGE_PROTOCOL_SECTION_STATE_SUCCESS',
      result: {
        statusCode: 200,
        statusMessage: 'Data successfully inserted',
      },
    };

    expect(
      changeProtocolSectionStateSuccess({
        statusCode: 200,
        statusMessage: 'Data successfully inserted',
      })
    ).toEqual(action);
  });

  it('handles change ProtocolSection State Failure action creator', () => {
    const action = {
      type: 'CHANGE_PROTOCOL_SECTION_STATE_FAILURE',
      error: 'Data conflict',
    };
    expect(changeProtocolSectionStateFailure('Data conflict')).toEqual(action);
  });

  it('handles change Protocol State Request action creator', () => {
    const action = { type: 'CHANGE_PROTOCOL_STATE_REQUEST' };
    expect(changeProtocolStateRequest()).toEqual(action);
  });

  it('handles change Protocol State Success action creator', () => {
    const action = {
      type: 'CHANGE_PROTOCOL_STATE_SUCCESS',
      result: {
        statusCode: 200,
        statusMessage: 'Data successfully inserted',
      },
    };

    expect(
      changeProtocolStateSuccess({
        statusCode: 200,
        statusMessage: 'Data successfully inserted',
      })
    ).toEqual(action);
  });

  it('handles change Protocol State Failure action creator', () => {
    const action = {
      type: 'CHANGE_PROTOCOL_STATE_FAILURE',
      error: 'Data conflict',
    };
    expect(changeProtocolStateFailure('Data conflict')).toEqual(action);
  });
});

//============== Fetch preview data ==============

it('handles fetchRequest action creator', () => {
  const action = { type: 'PROTOCOL_FETCH_PREVIEW_REQUEST' };
  expect(fetchPreviewRequest()).toEqual(action);
});

it('handles fetchSuccess action creator', () => {
  const action = {
    type: 'PROTOCOL_FETCH_PREVIEW_SUCCESS',
    result: {
      statusCode: 200,
      statusMessage: 'Data successfully sent',
    },
  };

  expect(
    fetchPreviewSuccess({
      statusCode: 200,
      statusMessage: 'Data successfully sent',
    })
  ).toEqual(action);
});

it('handles fetchFailure action creator', () => {
  const action = { type: 'PROTOCOL_FETCH_PREVIEW_FAILURE', error: 'No Data' };
  expect(fetchPreviewFailure('No Data')).toEqual(action);
});
