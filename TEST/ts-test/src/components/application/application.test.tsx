import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders corectly", () => {
    render(<Application />);
    //-----------------       1 getByRole()

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

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const submitBtnEl = screen.getByRole("button");
    expect(submitBtnEl).toBeInTheDocument();

    //-----------------       2 getByLabelText()

    const bioElement = screen.getByLabelText("Bio");
    expect(bioElement).toBeInTheDocument();

    const termsEl = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsEl).toBeInTheDocument();

    //-----------------       3 getByPlaceholderText()

    const fullNameEl = screen.getByPlaceholderText("Fullname");
    expect(fullNameEl).toBeInTheDocument();

    //-----------------       4 getByText()

    const helloWorldP = screen.getByText("Hello world");
    expect(helloWorldP).toBeInTheDocument();

    //-----------------       5 getByDisplayValue()

    const section2 = screen.getByDisplayValue("John Doe");
    expect(section2).toBeInTheDocument();

    //-----------------       6 getByAltText()

    const elephImg = screen.getByAltText("elephant");
    expect(elephImg).toBeInTheDocument();

    //-----------------       7 getByTitle()

    const closeEl = screen.getByTitle("close");
    expect(closeEl).toBeInTheDocument();

    //-----------------       8 getByTestId()

    const dataEl = screen.getByTestId("data");
    expect(dataEl).toBeInTheDocument();
  });
});
