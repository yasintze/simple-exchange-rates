// @flow
import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

describe("Footer component", () => {
  it("render correctly", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it("contain 'strong' tag", () => {
    const wrapper = shallow(<Footer date="2019-02-16" />);
    expect(wrapper.find("strong").exists()).toBe(true);
  });
});
