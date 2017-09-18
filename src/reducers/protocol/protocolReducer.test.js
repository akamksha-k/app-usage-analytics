import protocolReducer from './protocolReducer';

describe('protocol reducer', () => {
  const initialState = {
    protocol: {},

    statusCode: 0,
    successMessage: null,
    failureMessage: null,
    statusMessage: '',
  };

  const previewInitialState = {
    protocolPreviewResult: {},

    statusCode: 0,
    successProtocolPreviewMessage: null,
    failureProtocolPreviewMessage: null,
    statusProtocolPreviewMessage: '',
  };

  const searchInitialState = {
    sectionSearchResult: {},
    statusCode: 0,
    successMessage: null,
    failureSectionSearchMessage: null,
    statusSectionSearchMessage: null,
  };

  const ProtocolSearchInitialState = {
    protocolSearchResult: {},
    statusCode: 0,
    successMessage: null,
    failureSearchMessage: null,
    statusSearchMessage: null,
  };

  const saveInitialState = {
    statusCode: 0,
    successMessage: null,
    failureMessage: null,
  };

  it('handles default state', () => {
    const action = {};

    expect(protocolReducer(undefined, {})).toEqual(initialState);
  });

  it('handles PROTOCOL_SAVE_REQUEST action', () => {
    const action = { type: 'PROTOCOL_SAVE_REQUEST' };
    const expectedState = {
      protocol: {},

      statusCode: 0,
      successMessage: null,
      failureMessage: null,
      statusMessage: '',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_SAVE_SUCCESS action', () => {
    const action = {
      type: 'PROTOCOL_SAVE_SUCCESS',
      result: { protocol: { id: 1 } },
    };
    const expectedState = {
      protocol: { id: 1 },

      statusCode: 200,
      successMessage: 'Document created Successfully',
      failureMessage: null,
      statusMessage: '',
    };
    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_SAVE_FAILURE action', () => {
    const action = {
      type: 'PROTOCOL_SAVE_FAILURE',
      error: {
        statusCode: 400,
        successMessage: null,
        statusMessage: '',
        failureMessage: '',
        protocol: undefined,
      },
    };
    const expectedState = {
      failureMessage: '',
      protocol: undefined,
      statusCode: 400,
      successMessage: null,
      statusMessage: '',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });
  //============================ Tests for Fetch Protocol Data by Id======================

  it('handles PROTOCOL_FETCH_REQUEST action', () => {
    const action = { type: 'PROTOCOL_FETCH_REQUEST' };
    const expectedState = {
      protocol: {},

      statusCode: 0,
      successMessage: null,
      failureMessage: null,
      statusMessage: 'Loading...',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_FETCH_SUCCESS action', () => {
    const action = {
      type: 'PROTOCOL_FETCH_SUCCESS',
      result: { protocol: { title: 'test title' } },
    };
    const expectedState = {
      protocol: { title: 'test title' },
      statusCode: 200,
      successMessage: 'Fetched data successfully',
      failureMessage: null,
      statusMessage: '',
    };
    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_FETCH_FAILURE action', () => {
    const action = {
      type: 'PROTOCOL_FETCH_FAILURE',
      error: {
        statusCode: 400,
        successMessage: null,
        statusMessage: 'Fetching failed',
      },
    };
    const expectedState = {
      protocol: {},
      statusCode: 400,
      successMessage: null,
      failureMessage: 'Fetching failed',
      statusMessage: 'Fetching failed',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });
  //===========================================================================

  it('handles CHANGE_PROTOCOL_SECTION_STATE_REQUEST action', () => {
    const action = { type: 'CHANGE_PROTOCOL_SECTION_STATE_REQUEST' };
    const expectedState = {
      protocol: {},
      statusCode: 0,
      successMessage: null,
      failureMessage: null,
      statusMessage: '',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles CHANGE_PROTOCOL_SECTION_STATE_SUCCESS action', () => {
    const action = {
      type: 'CHANGE_PROTOCOL_SECTION_STATE_SUCCESS',
      result: { protocol: { id: 1 } },
    };
    const expectedState = {
      protocol: {},
      statusCode: 200,
      successMessage: 'Updated data successfully',
      failureMessage: null,
      statusMessage: '',
    };
    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles CHANGE_PROTOCOL_SECTION_STATE_FAILURE action', () => {
    const action = {
      type: 'CHANGE_PROTOCOL_SECTION_STATE_FAILURE',
      error: {
        statusCode: 400,
        successMessage: null,
        statusMessage: '',
        failureMessage: '',
        protocol: undefined,
      },
    };
    const expectedState = {
      failureMessage: '',
      protocol: {},
      statusCode: 400,
      successMessage: null,
      statusMessage: '',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles CHANGE_PROTOCOL_STATE_REQUEST action', () => {
    const action = { type: 'CHANGE_PROTOCOL_STATE_REQUEST' };
    const expectedState = {
      protocol: {},
      statusCode: 0,
      successMessage: null,
      failureMessage: null,
      statusMessage: '',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles CHANGE_PROTOCOL_STATE_SUCCESS action', () => {
    const action = {
      type: 'CHANGE_PROTOCOL_STATE_SUCCESS',
      result: { protocol: { id: 1 } },
    };
    const expectedState = {
      protocol: {},
      statusCode: 200,
      successMessage: 'Updated data successfully',
      failureMessage: null,
      statusMessage: '',
    };
    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles CHANGE_PROTOCOL_STATE_FAILURE action', () => {
    const action = {
      type: 'CHANGE_PROTOCOL_STATE_FAILURE',
      error: {
        statusCode: 400,
        successMessage: null,
        statusMessage: '',
        failureMessage: null,
        protocol: undefined,
      },
    };
    const expectedState = {
      failureMessage: '',
      protocol: {},
      statusCode: 400,
      successMessage: null,
      statusMessage: '',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });

  //============================ Tests for Fetch Protocol Preivew Data ======================

  it('handles PROTOCOL_FETCH_PREVIEW_REQUEST action', () => {
    const action = { type: 'PROTOCOL_FETCH_PREVIEW_REQUEST' };
    const expectedState = {
      protocolPreviewResult: {},
      statusCode: 0,
      successProtocolPreviewMessage: null,
      failureProtocolPreviewMessage: null,
      statusProtocolPreviewMessage: 'Loading...',
    };

    expect(protocolReducer(previewInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_FETCH_PREVIEW_SUCCESS action', () => {
    const action = {
      type: 'PROTOCOL_FETCH_PREVIEW_SUCCESS',
      result: { protocol: { title: 'test title' } },
    };
    const expectedState = {
      protocolPreviewResult: { title: 'test title' },
      statusCode: 200,
      successProtocolPreviewMessage: 'Fetched data successfully',
      failureProtocolPreviewMessage: null,
      statusProtocolPreviewMessage: '',
    };
    expect(protocolReducer(previewInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_FETCH_PREVIEW_FAILURE action', () => {
    const action = {
      type: 'PROTOCOL_FETCH_PREVIEW_FAILURE',
      error: {
        statusCode: 400,
        successProtocolPreviewMessage: null,
        statusMessage: 'Fetching failed',
      },
    };
    const expectedState = {
      protocolPreviewResult: {},
      statusCode: 400,
      successProtocolPreviewMessage: null,
      failureProtocolPreviewMessage: 'Fetching failed',
      statusProtocolPreviewMessage: 'Fetching failed',
    };

    expect(protocolReducer(previewInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_SEARCH_SECTION_FETCH_FAILURE action', () => {
    const action = {
      type: 'PROTOCOL_SEARCH_SECTION_FETCH_FAILURE',
      error: {
        statusCode: 404,
        sectionSearchResult: {},
        successMessage: null,
        failureSectionSearchMessage: 'Fetching failed',
        statusSectionSearchMessage: undefined,
      },
    };
    const expectedState = {
      sectionSearchResult: {},
      statusCode: 404,
      successMessage: null,
      failureSectionSearchMessage: undefined,
      statusSectionSearchMessage: undefined,
    };

    expect(protocolReducer(searchInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_SEARCH_SECTION_FETCH_REQUEST action', () => {
    const action = {
      type: 'PROTOCOL_SEARCH_SECTION_FETCH_REQUEST',
    };
    const expectedState = {
      sectionSearchResult: {},
      statusCode: 0,
      successMessage: null,
      failureSectionSearchMessage: null,
      statusSectionSearchMessage: 'Loading...',
    };

    expect(protocolReducer(searchInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_SEARCH_SECTION_FETCH_SUCCESS action', () => {
    const action = {
      type: 'PROTOCOL_SEARCH_SECTION_FETCH_SUCCESS',
      result: { protocolSection: 'Section title' },
    };
    const expectedState = {
      sectionSearchResult: 'Section title',
      statusCode: 200,
      successMessage: 'Fetched data successfully',
      failureSectionSearchMessage: null,
      statusSectionSearchMessage: '',
    };

    expect(protocolReducer(searchInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_SEARCH_FETCH_REQUEST action', () => {
    const action = {
      type: 'PROTOCOL_SEARCH_FETCH_REQUEST',
    };
    const expectedState = {
      protocolSearchResult: {},
      statusCode: 0,
      successMessage: null,
      failureSearchMessage: null,
      statusSearchMessage: 'Loading...',
    };

    expect(protocolReducer(ProtocolSearchInitialState, action)).toEqual(
      expectedState
    );
  });

  it('handles PROTOCOL_SEARCH_FETCH_SUCCESS action', () => {
    const action = {
      type: 'PROTOCOL_SEARCH_FETCH_SUCCESS',
      result: { protocol: 'Protocol title' },
    };
    const expectedState = {
      protocolSearchResult: 'Protocol title',
      statusCode: 200,
      successMessage: 'Fetched data successfully',
      failureSearchMessage: null,
      statusSearchMessage: '',
    };

    expect(protocolReducer(ProtocolSearchInitialState, action)).toEqual(
      expectedState
    );
  });

  it('handles PROTOCOL_SEARCH_FETCH_FAILURE action', () => {
    const action = {
      type: 'PROTOCOL_SEARCH_FETCH_FAILURE',
      error: {
        statusCode: 404,
        protocolSearchResult: {},
        successMessage: null,
        failureSearchMessage: null,
        statusSearchMessage: undefined,
      },
    };
    const expectedState = {
      protocolSearchResult: {},
      statusCode: 404,
      successMessage: null,
      failureSearchMessage: undefined,
      statusSearchMessage: undefined,
    };

    expect(protocolReducer(ProtocolSearchInitialState, action)).toEqual(
      expectedState
    );
  });

  it('handles PROTOCOL_SECTION_SAVE_SUCCESS action', () => {
    const action = {
      type: 'PROTOCOL_SECTION_SAVE_SUCCESS',
    };
    const expectedState = {
      statusCode: 200,
      successMessage: 'Fetched data successfully',
      failureMessage: null,
    };

    expect(protocolReducer(saveInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_SECTION_SAVE_FAILURE action', () => {
    const action = {
      type: 'PROTOCOL_SECTION_SAVE_FAILURE',
      error: {
        statusCode: 404,
      },
    };
    const expectedState = {
      statusCode: 404,
      successMessage: null,
      failureMessage: undefined,
    };

    expect(protocolReducer(saveInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_SECTION_SAVE_REQUEST action', () => {
    const action = {
      type: 'PROTOCOL_SECTION_SAVE_REQUEST',
    };
    const expectedState = {
      statusCode: 0,
      successMessage: null,
      failureMessage: null,
    };

    expect(protocolReducer(saveInitialState, action)).toEqual(expectedState);
  });

  it('handles PROTOCOL_CLEAR_PROPS action', () => {
    const action = { type: 'PROTOCOL_CLEAR_PROPS' };
    const expectedState = {
      protocol: {},

      statusCode: 0,
      successMessage: null,
      failureMessage: null,
      statusMessage: '',
    };

    expect(protocolReducer(initialState, action)).toEqual(expectedState);
  });
});
