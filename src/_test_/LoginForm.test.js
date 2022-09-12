import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

describe("LoginForm", () => {
  it("renders the LoginForm component", () => {
    render(
          <LoginForm />
    );
  });

  it("renders the LoginForm component snapshot", () => {
    const { asFragment } = render(
          <LoginForm />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the LoginForm component with a username and password", () => {
    render(
          <LoginForm />
    );
    const username = screen.getByTestId("username");
    const password = screen.getByTestId("password");
    const login = screen.getByTestId("login");
    fireEvent.change(username, { target: { value: "sarahedo" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(login);
  });
}
);
