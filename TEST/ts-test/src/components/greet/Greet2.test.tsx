import { render, screen } from "@testing-library/react";
import Greet2 from "./Greet2";

/* Greet2 should render the text hello and if is passed into component it should render hello
followed by the name*/

describe("Greed2 component", () => {
  test("should renders corectly", () => {
    render(<Greet2 />);
    const textEl = screen.getByText("Hello");
    expect(textEl).toBeInTheDocument();
  });
  test("renders wiith a name", () => {
    render(<Greet2 name="Joe" />);
    const textEl = screen.getByText("Hello Joe");
    expect(textEl).toBeInTheDocument();
  });
});
