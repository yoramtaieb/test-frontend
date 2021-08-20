/* eslint-disable jest/valid-expect */
import App from "./App";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("formLogin", () => {
  it("should show form login", () => {
    render(<App />);
    const components = screen.getByTestId("form_login");
    expect(components).toBeInTheDocument();
  });

  it("should change input value when user writes fields", () => {
    render(<App />);
    const input = screen.getByLabelText("firstName").nextElementSibling;
    fireEvent.change(input, { target: { value: "Yoram" } });

    expect(input.value).toBe("Yoram");
  });

  it("should not send form if every fields are not writes", () => {
    render(<App />);
    const onSubmit = jest.fn();
    const form = screen.getByTestId("form_login").firstChild;

    fireEvent.click(screen.getByTestId("form_login").firstChild);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
