// @flow
import React from "react";
import { shallow } from "enzyme";

import InputNominal from "./InputNominal";

describe("InputNominal component", () => {
  it("render correctly", () => {
    const wrapper = shallow(<InputNominal />);
    expect(wrapper).toMatchSnapshot();
  });
});
