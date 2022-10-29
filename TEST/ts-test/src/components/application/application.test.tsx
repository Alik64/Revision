import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders corectly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();
    const sectionHeading3 = screen.getByRole("heading", {
      level: 3,
    });
    expect(sectionHeading3).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByLabelText("Bio");
    expect(bioElement).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsEl).toBeInTheDocument();

    const submitBtnEl = screen.getByRole("button");
    expect(submitBtnEl).toBeInTheDocument();
  });
});
