import { push } from 'react-router-redux';
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../../../config/config.json`)[env];

export function saveRequest() {
  return { type: 'PROTOCOL_SAVE_REQUEST' };
}

export function saveProtocolSectionRequest() {
  return { type: 'PROTOCOL_SECTION_SAVE_REQUEST' };
}
export function saveProtocolSectionSuccess(result) {
  return { type: 'PROTOCOL_SECTION_SAVE_SUCCESS', result };
}
export function saveProtocolSectionFailure(error) {
  return { type: 'PROTOCOL_SECTION_SAVE_FAILURE', error };
}

export function changeProtocolSectionStateRequest() {
  return { type: 'CHANGE_PROTOCOL_SECTION_STATE_REQUEST' };
}
export function changeProtocolSectionStateSuccess(result) {
  return { type: 'CHANGE_PROTOCOL_SECTION_STATE_SUCCESS', result };
}
export function changeProtocolSectionStateFailure(error) {
  return { type: 'CHANGE_PROTOCOL_SECTION_STATE_FAILURE', error };
}
export function changeProtocolStateRequest() {
  return { type: 'CHANGE_PROTOCOL_STATE_REQUEST' };
}
export function changeProtocolStateSuccess(result) {
  return { type: 'CHANGE_PROTOCOL_STATE_SUCCESS', result };
}
export function changeProtocolStateFailure(error) {
  return { type: 'CHANGE_PROTOCOL_STATE_FAILURE', error };
}

export function saveSuccess(result) {
  return { type: 'PROTOCOL_SAVE_SUCCESS', result };
}

export function saveFailure(error) {
  return { type: 'PROTOCOL_SAVE_FAILURE', error };
}

export function clearProps() {
  return { type: 'PROTOCOL_CLEAR_PROPS' };
}

function _createProtocolObject(
  protocol_number,
  protocol_title,
  sponsorId,
  therapeuticArea,
  drugProjectId,
  compoundNumber,
  createdBy,
  amendmentNumber,
  shortTitle,
  legalRegisteredAddress1,
  legalRegisteredAddress2,
  legalRegisteredAddress3,
  legalRegisteredAddress4,
  regulatoryAgencyNumbers,
  developmenetPhase,
  indication,
  trialTypeId,
  SourceProtocolId,
  MedicId,
  StatisticianId,
  MedicName,
  StatisticianName,
  targetEndDate,
  studyNickName
) {
  var protocol = {
    title: protocol_title,
    number: protocol_number,
    sponsorId: sponsorId,
    trialTypeId: trialTypeId,
    therapeuticArea: therapeuticArea,
    drugProjectId: drugProjectId,
    compoundNumber: compoundNumber,
    amendmentNumber: amendmentNumber,
    shortTitle: shortTitle,
    legalRegisteredAddress4: legalRegisteredAddress4,
    legalRegisteredAddress3: legalRegisteredAddress3,
    legalRegisteredAddress2: legalRegisteredAddress2,
    legalRegisteredAddress1: legalRegisteredAddress1,
    regulatoryAgencyNumbers: regulatoryAgencyNumbers,
    developmenetPhase: developmenetPhase,
    indication: indication,
    SourceProtocolId: SourceProtocolId,
    MedicId: MedicId,
    StatisticianId: StatisticianId,
    MedicName: MedicName,
    StatisticianName: StatisticianName,
    targetEndDate: targetEndDate,
    studyNickName: studyNickName,
  };
  return protocol;
}

export function createProtocol(
  protocol_number,
  protocol_title,
  sponsorId,
  therapeuticArea,
  drugProjectId,
  compoundNumber,
  createdBy,
  amendmentNumber,
  shortTitle,
  legalRegisteredAddress1,
  legalRegisteredAddress2,
  legalRegisteredAddress3,
  legalRegisteredAddress4,
  regulatoryAgencyNumbers,
  developmenetPhase,
  indication,
  trialTypeId,
  SourceProtocolId,
  MedicId,
  StatisticianId,
  MedicName,
  StatisticianName,
  targetEndDate,
  studyNickName
) {
  var protocolObj = _createProtocolObject(
    protocol_number,
    protocol_title,
    sponsorId,
    therapeuticArea,
    drugProjectId,
    compoundNumber,
    createdBy,
    amendmentNumber,
    shortTitle,
    legalRegisteredAddress1,
    legalRegisteredAddress2,
    legalRegisteredAddress3,
    legalRegisteredAddress4,
    regulatoryAgencyNumbers,
    developmenetPhase,
    indication,
    trialTypeId,
    SourceProtocolId,
    MedicId,
    StatisticianId,
    MedicName,
    StatisticianName,
    targetEndDate,
    studyNickName
  );
  return function(dispatch) {
    dispatch(saveRequest());
    return fetch(`${config.Server_URL}/protocol/create`, {
      method: 'POST',
      body: JSON.stringify({
        title: protocol_title,
        number: protocol_number,
        sponsorId: sponsorId,
        therapeuticArea: therapeuticArea,
        drugProjectId: drugProjectId,
        compoundNumber: compoundNumber,
        createdBy: createdBy,
        amendmentNumber: amendmentNumber,
        shortTitle: shortTitle,
        legalRegisteredAddress1: legalRegisteredAddress1,
        legalRegisteredAddress2: legalRegisteredAddress2,
        legalRegisteredAddress3: legalRegisteredAddress3,
        legalRegisteredAddress4: legalRegisteredAddress4,
        regulatoryAgencyNumbers: regulatoryAgencyNumbers,
        developmenetPhase: developmenetPhase,
        indication: indication,
        trialTypeId: trialTypeId,
        SourceProtocolId: SourceProtocolId,
        MedicId: MedicId,
        StatisticianId: StatisticianId,
        targetEndDate: targetEndDate,
        studyNickName: studyNickName,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teame:eels'),
      },
    })
      .then(response => response.json())
      .then(save_res => {
        if (save_res.statusCode === 200) {
          dispatch(saveSuccess(save_res));
          dispatch(push(`/protocol/${save_res.protocol.id}`));
        } else {
          save_res.protocolObj = protocolObj;
          dispatch(saveFailure(save_res));
        }
      })
      .catch(error => {
        error.protocolObj = protocolObj;
        dispatch(saveFailure(error));
      });
  };
}

//============================Fetch Protocol Data By Id==================

export function fetchRequest() {
  return { type: 'PROTOCOL_FETCH_REQUEST' };
}

export function fetchSearchRequest() {
  return { type: 'PROTOCOL_SEARCH_FETCH_REQUEST' };
}

export function fetchSearchSuccess(result) {
  return { type: 'PROTOCOL_SEARCH_FETCH_SUCCESS', result };
}

export function fetchSearchFailure(error) {
  return { type: 'PROTOCOL_SEARCH_FETCH_FAILURE', error };
}

export function fetchSuccess(result) {
  return { type: 'PROTOCOL_FETCH_SUCCESS', result };
}

export function fetchFailure(error) {
  return { type: 'PROTOCOL_FETCH_FAILURE', error };
}

export function fetchProtocol(id, detailed) {
  return function(dispatch) {
    dispatch(fetchRequest());
    return fetch(`${config.Server_URL}/protocol/${id}/${detailed}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teame:eels'),
      },
    })
      .then(response => response.json())
      .then(fetch_res => {
        if (fetch_res.statusCode === 200) {
          if (detailed === 'False') {
            fetch_res.protocol.number = '';
            fetch_res.protocol.studyNickName = '';
            fetch_res.protocol.targetEndDate = '';
          }
          dispatch(fetchSuccess(fetch_res));
        } else {
          dispatch(fetchFailure(fetch_res));
        }
      })
      .catch(error => {
        dispatch(fetchFailure(error));
      });
  };
}

//============================Fetch Protocol Data By Id End======================

//============================Fetch Protocol By Search Criteria ==================
export function fetchProtocolByCriteria(
  chkStudyNickName,
  studyNickName,
  chkTherapticAreas,
  lstTherapticAreas,
  chkIndication,
  lstIndication,
  chkCompoundNumber,
  lstCompoundNumber,
  chkPhasevalue,
  lstPhasevalue,
  chkstudytype,
  docStudyType,
  ProtocolNumberValue,
  IsSearchByProtocol
) {
  return function(dispatch) {
    dispatch(fetchSearchRequest());
    return fetch(`${config.Server_URL}/protocol/searchProtocolsByCriteria`, {
      method: 'POST',
      body: JSON.stringify({
        chkStudyNickName: chkStudyNickName,
        studyNickName: studyNickName,
        chkTherapticAreas: chkTherapticAreas,
        therapeuticArea: lstTherapticAreas,
        chkIndication: chkIndication,
        indication: lstIndication,
        chkCompoundNumber: chkCompoundNumber,
        compoundNumber: lstCompoundNumber,
        chkPhasevalue: chkPhasevalue,
        developmenetPhase: lstPhasevalue,
        chkstudytype: chkstudytype,
        trialTypeId: docStudyType,
        ProtocolNumberValue: ProtocolNumberValue,
        IsSearchByProtocol: IsSearchByProtocol,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teame:eels'),
      },
    })
      .then(response => response.json())
      .then(fetch_res => {
        if (fetch_res.statusCode === 200) {
          dispatch(fetchSearchSuccess(fetch_res));
        } else {
          dispatch(fetchSearchFailure(fetch_res));
        }
      })
      .catch(error => {
        dispatch(fetchSearchFailure(error));
      });
  };
}

//============================Update Protocol Section By Id ==================

export function saveProtocolSection(
  protocol_section_id,
  protocol_section_content,
  userId,
  SectionReviewers,
  SectionAuthors
) {
  return function(dispatch) {
    dispatch(saveProtocolSectionRequest());
    return fetch(
      `${config.Server_URL}/protocolsection/${protocol_section_id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          content: protocol_section_content,
          userId: userId,
          protocol_section_id: protocol_section_id,
          SectionReviewers: SectionReviewers,
          SectionAuthors: SectionAuthors,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('teame:eels'),
        },
      }
    )
      .then(response => response.json())
      .then(save_res => {
        if (save_res.statusCode === 200) {
          dispatch(saveProtocolSectionSuccess(save_res));
        } else {
          dispatch(saveProtocolSectionFailure(save_res));
        }
      })
      .catch(error => {
        dispatch(saveProtocolSectionFailure(error));
      });
  };
}

export function changeProtocolSectionState(
  protocol_section_id,
  StateId,
  userId
) {
  return function(dispatch) {
    dispatch(changeProtocolSectionStateRequest());
    return fetch(
      `${config.Server_URL}/protocolsection/changeState/${protocol_section_id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          StateId: StateId,
          userId: userId,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('teame:eels'),
        },
      }
    )
      .then(response => response.json())
      .then(save_res => {
        if (save_res.statusCode === 200) {
          dispatch(changeProtocolSectionStateSuccess(save_res));
        } else {
          dispatch(changeProtocolSectionStateFailure(save_res));
        }
      })
      .catch(error => {
        dispatch(changeProtocolSectionStateFailure(error));
      });
  };
}

export function changeProtocolState(protocolId, stateId, userId) {
  return function(dispatch) {
    dispatch(changeProtocolStateRequest());
    return fetch(`${config.Server_URL}/protocol/changeState/${protocolId}`, {
      method: 'PUT',
      body: JSON.stringify({
        stateId: stateId,
        userId: userId,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teame:eels'),
      },
    })
      .then(response => response.json())
      .then(save_res => {
        if (save_res.statusCode === 200) {
          dispatch(changeProtocolStateSuccess(save_res));
        } else {
          dispatch(changeProtocolStateFailure(save_res));
        }
      })
      .catch(error => {
        dispatch(changeProtocolStateFailure(error));
      });
  };
}
//=================== Fetch Section details by Protocol and template section Id ==================

export function fetchSearchSectionRequest() {
  return { type: 'PROTOCOL_SEARCH_SECTION_FETCH_REQUEST' };
}

export function fetchSearchSectionSuccess(result) {
  return { type: 'PROTOCOL_SEARCH_SECTION_FETCH_SUCCESS', result };
}

export function fetchSearchSectionFailure(error) {
  return { type: 'PROTOCOL_SEARCH_SECTION_FETCH_FAILURE', error };
}

export function fetchSectionDetailsForCriteria(
  ProtocolId,
  SectionId,
  TemplateSectionId
) {
  return function(dispatch) {
    dispatch(fetchSearchSectionRequest());
    return fetch(
      `${config.Server_URL}/protocolsection/searchSectionDetailsByCriteria`,
      {
        method: 'POST',
        body: JSON.stringify({
          ProtocolId: ProtocolId,
          SectionId: SectionId,
          TemplateSectionId: TemplateSectionId,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('teame:eels'),
        },
      }
    )
      .then(response => response.json())
      .then(fetch_res => {
        if (fetch_res.statusCode === 200) {
          dispatch(fetchSearchSectionSuccess(fetch_res));
        } else {
          dispatch(fetchSearchSectionFailure(fetch_res));
        }
      })
      .catch(error => {
        dispatch(fetchSearchSectionFailure(error));
      });
  };
}

//============Fetch data for preview screen==========================

export function fetchPreviewRequest() {
  return { type: 'PROTOCOL_FETCH_PREVIEW_REQUEST' };
}

export function fetchPreviewSuccess(result) {
  return { type: 'PROTOCOL_FETCH_PREVIEW_SUCCESS', result };
}

export function fetchPreviewFailure(error) {
  return { type: 'PROTOCOL_FETCH_PREVIEW_FAILURE', error };
}

export function fetchProtocolForPreview(id, detailed) {
  return function(dispatch) {
    dispatch(fetchPreviewRequest());
    return fetch(`${config.Server_URL}/protocol/${id}/${detailed}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teame:eels'),
      },
    })
      .then(response => response.json())
      .then(fetch_res => {
        if (fetch_res.statusCode === 200) {
          dispatch(fetchPreviewSuccess(fetch_res));
        } else {
          dispatch(fetchPreviewFailure(fetch_res));
        }
      })
      .catch(error => {
        dispatch(fetchPreviewFailure(error));
      });
  };
}
