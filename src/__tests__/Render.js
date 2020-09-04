import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Content from "../dashboard/Content";
import Header from "../dashboard/Header";
import Navigator from "../dashboard/Navigator";
import Paperbase from "../dashboard/Paperbase";

describe("Render", () => {
  console.log = jest.fn();
  console.error = jest.fn();
  console.warn = jest.fn();

  test("Check if Content renders", () => {
    const { getByTestId } = render(<Content />);
    const Paper = getByTestId("content-paper");
    expect(Paper).toBeInTheDocument();
  });

  test("Check if Header renders", () => {
    const { getByTestId } = render(<Header />);
    const Paper = getByTestId("header-paper");
    expect(Paper).toBeInTheDocument();
  });

  test("Check if Navigator renders", () => {
    const { getByTestId } = render(<Navigator />);
    const Paper = getByTestId("navigator-paper");
    expect(Paper).toBeInTheDocument();
  });

  test("Check if Paperbase renders", () => {
    const { getByTestId } = render(<Paperbase />);
    const Paper = getByTestId("paperbase-paper");
    expect(Paper).toBeInTheDocument();
  });
});
