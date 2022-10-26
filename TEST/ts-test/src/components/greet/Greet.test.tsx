import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders corectly", () => {
  render(<Greet />);
  const textEl = screen.getByText(/hello/i);
  expect(textEl).toBeInTheDocument();
});
