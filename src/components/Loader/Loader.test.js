// @flow
import React from "react";
import { shallow } from "enzyme";

import Loader from "./Loader";

describe("Loader component", () => {
  it("render correctly", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
