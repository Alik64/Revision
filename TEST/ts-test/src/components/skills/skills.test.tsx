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
});
