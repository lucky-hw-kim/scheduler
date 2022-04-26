import React from "react";

import { render, prettyDOM } from "@testing-library/react";

import Appointment from "../Appointment/index";




describe("Appointment", () => {

  it("renders with data and renders crashing", () => {
  render(<Appointment />);
  });

  it("doesn't call the function", () => {
    const fn = jest.fn();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it("calls the function", () => {
    const fn = jest.fn();
    fn();
    expect(fn).toHaveBeenCalledTimes(1);
   });

   it("calls the function with specific arguments", () => {
    const fn = jest.fn();
    fn(10);
    expect(fn).toHaveBeenCalledWith(10);
   });

})
