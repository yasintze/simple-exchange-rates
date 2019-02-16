// @flow
import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header component", () => {
  it("render correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
