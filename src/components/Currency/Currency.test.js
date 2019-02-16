// @flow
import React from "react";
import { shallow } from "enzyme";

import Currency from "./Currency";

describe("Currency component", () => {
  it("render correctly", () => {
    const wrapper = shallow(<Currency />);
    expect(wrapper).toMatchSnapshot();
  });
});
