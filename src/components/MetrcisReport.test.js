import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";

import { MetrcisReport } from "./MetrcisReport";

describe('Component: MetrcisReport', () => {
  const matchStub = { params: { id: 1 } };
  const dispatchStub = () => {
    return {};
  };
  const mockProtocol = {
    studyNickName: "Very Fine Protocol",
    stateId: 2,
    number: "123",
    startedAt: "1/1/0001",
    sections: 8,
    authorSections: 2,
    reviewerSections: 3,
    startedSections: 2,
    unstartedSections: 2,
    reviewingSections: 2,
    completeSections: 2
  };

const wrapp = shallow(<MetrcisReport
      match={matchStub}
      dispatch={dispatchStub}
      protocol={mockProtocol}

 />);


        const insta = wrapp.instance();

  it("Check for existence of methods", () => {
    insta.displayTitle("Title of the protcol will render here");
  })

})