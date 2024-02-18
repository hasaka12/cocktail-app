import React from "react";
import { render } from "@testing-library/react";
import BouncingLoadingIndicator from "./BouncingLoadingIndicator";

describe("CocktailCard", () => {
  test("renders three bouncing loader elements", () => {
    const { container } = render(<BouncingLoadingIndicator />);
    const loaderElements = container.querySelectorAll(".bouncing-loader div");
    expect(loaderElements.length).toBe(3);
  });

  test("renders loader elements with correct animation delay", () => {
    const { container } = render(<BouncingLoadingIndicator />);
    const loaderElements = container.querySelectorAll(".bouncing-loader div");
    const animationDelays = Array.from(loaderElements).map(
      (element: any) => element.style.animationDelay
    );
    expect(animationDelays).toEqual(["0ms", "200ms", "500ms"]);
  });

  test("Renders correctly", () => {
    const { asFragment } = render(<BouncingLoadingIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
});
