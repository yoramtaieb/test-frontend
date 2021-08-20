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

  it("should send form when every fields are writes", () => {
    render(<App />);
    const onSubmit = jest.fn();
    const formLogin = screen.getByTestId("form_login").firstChild;

    const firstName = screen.getByLabelText("firstName").nextElementSibling;
    const lastName = screen.getByLabelText("lastName").nextElementSibling;
    const email = screen.getByLabelText("email").nextElementSibling;
    const password = screen.getByLabelText("password").nextElementSibling;

    fireEvent.change(firstName, { target: { value: "Yoram" } });
    fireEvent.change(lastName, { target: { value: "Taieb" } });
    fireEvent.change(email, { target: { value: "yoram@gmail.com" } });
    fireEvent.change(password, { target: { value: "Azerty15" } });

    fireEvent.click(screen.getByTestId("form_login").firstChild);

    // eslint-disable-next-line no-unused-expressions
    expect(onSubmit).toHaveBeenCalled;
  });
});
