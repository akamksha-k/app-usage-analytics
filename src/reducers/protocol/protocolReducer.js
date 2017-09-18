const initialState = {
  protocol: {},
  statusCode: 0,
  successMessage: null,
  failureMessage: null,
  statusMessage: '',
};

function protocolReducer(state = initialState, action) {
  switch (action.type) {
    case 'PROTOCOL_SAVE_REQUEST':
      return Object.assign({}, state, {
        protocol: {},
        statusCode: 0,
        successMessage: null,
        failureMessage: null,
      });

    case 'PROTOCOL_SAVE_SUCCESS':
      return Object.assign({}, state, {
        protocol: action.result.protocol,
        statusCode: 200,
        successMessage: 'Document created Successfully',
        failureMessage: null,
      });

    case 'PROTOCOL_SAVE_FAILURE':
      return Object.assign({}, state, {
        protocol: action.error.protocolObj,
        statusCode: action.error.statusCode,
        successMessage: null,
        failureMessage: action.error.statusMessage,
      });

    case 'PROTOCOL_FETCH_REQUEST':
      return Object.assign({}, state, {
        protocol: {},
        statusCode: 0,
        successMessage: null,
        failureMessage: null,
        statusMessage: 'Loading...',
      });

    case 'PROTOCOL_FETCH_SUCCESS':
      return Object.assign({}, state, {
        protocol: action.result.protocol,
        statusCode: 200,
        successMessage: 'Fetched data successfully',
        failureMessage: null,
        statusMessage: '',
      });

    case 'PROTOCOL_FETCH_FAILURE':
      return Object.assign({}, state, {
        protocol: {},
        statusCode: action.error.statusCode,
        successMessage: null,
        failureMessage: action.error.statusMessage,
        statusMessage: action.error.statusMessage,
      });

    case 'PROTOCOL_FETCH_PREVIEW_REQUEST':
      return Object.assign({}, state, {
        protocolPreviewResult: {},
        statusCode: 0,
        successProtocolPreviewMessage: null,
        failureProtocolPreviewMessage: null,
        statusProtocolPreviewMessage: 'Loading...',
      });

    case 'PROTOCOL_FETCH_PREVIEW_SUCCESS':
      return Object.assign({}, state, {
        protocolPreviewResult: action.result.protocol,
        statusCode: 200,
        successProtocolPreviewMessage: 'Fetched data successfully',
        failureProtocolPreviewMessage: null,
        statusProtocolPreviewMessage: '',
      });

    case 'PROTOCOL_FETCH_PREVIEW_FAILURE':
      return Object.assign({}, state, {
        protocolPreviewResult: {},
        statusCode: action.error.statusCode,
        successProtocolPreviewMessage: null,
        failureProtocolPreviewMessage: action.error.statusMessage,
        statusProtocolPreviewMessage: action.error.statusMessage,
      });

    case 'PROTOCOL_SEARCH_FETCH_REQUEST':
      return Object.assign({}, state, {
        protocolSearchResult: {},
        statusCode: 0,
        successMessage: null,
        failureSearchMessage: null,
        statusSearchMessage: 'Loading...',
      });

    case 'PROTOCOL_SEARCH_FETCH_SUCCESS':
      return Object.assign({}, state, {
        protocolSearchResult: action.result.protocol,
        statusCode: 200,
        successMessage: 'Fetched data successfully',
        failureSearchMessage: null,
        statusSearchMessage: '',
      });

    case 'PROTOCOL_SEARCH_FETCH_FAILURE':
      return Object.assign({}, state, {
        protocolSearchResult: {},
        statusCode: action.error.statusCode,
        successMessage: null,
        failureSearchMessage: action.error.statusMessage,
        statusSearchMessage: action.error.statusMessage,
      });

    case 'PROTOCOL_CLEAR_PROPS':
      return Object.assign({}, state, {
        protocol: {},
        statusCode: 0,
        successMessage: null,
        failureMessage: null,
        statusMessage: '',
      });
    case 'PROTOCOL_SECTION_SAVE_REQUEST':
      return Object.assign({}, state, {
        statusCode: 0,
        successMessage: null,
        failureMessage: null,
      });
    case 'PROTOCOL_SECTION_SAVE_SUCCESS':
      return Object.assign({}, state, {
        statusCode: 200,
        successMessage: 'Fetched data successfully',
        failureMessage: null,
      });
    case 'PROTOCOL_SECTION_SAVE_FAILURE':
      return Object.assign({}, state, {
        statusCode: action.error.statusCode,
        successMessage: null,
        failureMessage: action.error.statusMessage,
      });

    case 'CHANGE_PROTOCOL_SECTION_STATE_REQUEST':
      return Object.assign({}, state, {
        statusCode: 0,
        successMessage: null,
        failureMessage: null,
      });
    case 'CHANGE_PROTOCOL_SECTION_STATE_SUCCESS':
      return Object.assign({}, state, {
        statusCode: 200,
        successMessage: 'Updated data successfully',
        failureMessage: null,
      });
    case 'CHANGE_PROTOCOL_SECTION_STATE_FAILURE':
      return Object.assign({}, state, {
        statusCode: action.error.statusCode,
        successMessage: null,
        failureMessage: action.error.statusMessage,
      });

    case 'PROTOCOL_SEARCH_SECTION_FETCH_REQUEST':
      return Object.assign({}, state, {
        sectionSearchResult: {},
        statusCode: 0,
        successMessage: null,
        failureSectionSearchMessage: null,
        statusSectionSearchMessage: 'Loading...',
      });

    case 'PROTOCOL_SEARCH_SECTION_FETCH_SUCCESS':
      return Object.assign({}, state, {
        sectionSearchResult: action.result.protocolSection,
        statusCode: 200,
        successMessage: 'Fetched data successfully',
        failureSectionSearchMessage: null,
        statusSectionSearchMessage: '',
      });

    case 'PROTOCOL_SEARCH_SECTION_FETCH_FAILURE':
      return Object.assign({}, state, {
        sectionSearchResult: {},
        statusCode: action.error.statusCode,
        successMessage: null,
        failureSectionSearchMessage: action.error.statusMessage,
        statusSectionSearchMessage: action.error.statusMessage,
      });

    case 'CHANGE_PROTOCOL_STATE_REQUEST':
      return Object.assign({}, state, {
        statusCode: 0,
        successMessage: null,
        failureMessage: null,
      });
    case 'CHANGE_PROTOCOL_STATE_SUCCESS':
      return Object.assign({}, state, {
        statusCode: 200,
        successMessage: 'Updated data successfully',
        failureMessage: null,
      });
    case 'CHANGE_PROTOCOL_STATE_FAILURE':
      return Object.assign({}, state, {
        statusCode: action.error.statusCode,
        successMessage: null,
        failureMessage: action.error.statusMessage,
      });

    default:
      return state;
  }
}

export default protocolReducer;
