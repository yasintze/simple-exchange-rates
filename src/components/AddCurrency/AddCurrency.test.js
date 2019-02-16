// @flow
import React from "react";
import { shallow } from "enzyme";

import AddCurrency from "./AddCurrency";

describe("AddCurrency component", () => {
  it("render correctly", () => {
    const wrapper = shallow(<AddCurrency />);
    expect(wrapper).toMatchSnapshot();
  });
});
