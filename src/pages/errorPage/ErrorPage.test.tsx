import { render } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("ErrorPage", () => {
  test("renders ErrorPage component", () => {
    const { getByText } = render(<ErrorPage />);
    const errorPageElement = getByText(/ErrorPage/i);
    expect(errorPageElement).toBeInTheDocument();
  });

  test("Renders correctly", () => {
    const { asFragment } = render(<ErrorPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
