import { screen, render } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["CSS", "HTML", "JavaScript"];

  test("should render corectly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start Learning Button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });
});
