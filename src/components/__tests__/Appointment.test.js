import React from "react";

import { render, prettyDOM } from "@testing-library/react";

import Appointment from "../Appointment/index";




describe("Appointment", () => {

  it("renders with data and renders crashing", () => {
  render(<Appointment />);
  });

  
})
