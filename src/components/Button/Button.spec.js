import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";

describe("<Button />", () => {
  it("should display provided text", () => {
    const wrapper = shallow(<Button>test</Button>);
    expect(wrapper.text()).toEqual("test");
  });
});
