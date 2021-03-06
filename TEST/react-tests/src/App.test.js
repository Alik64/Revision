import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App/>", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("renders my elements", () => {
    const myHeading = screen.getByText(/React testing/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/hello/i);
    expect(myHeading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    // screen.debug();
   // expect(input).toMatchSnapshot();
  });
  test("testing queryByText()", () => {
    const hwElem = screen.queryByText(/hello world/i);
    expect(hwElem).toBeNull();
  });

  test("testing async with findBy", async () => {
    // screen.debug()
    const myAsyncElem = await screen.findByText(/data/i);
    expect(myAsyncElem).toBeInTheDocument();
  });
  test("test click event", () => {
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
  });
  test('input events',()=>{
    const input = screen.getByPlaceholderText(/hello/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('') 
    // fireEvent.input(input,{
    //   target:{
    //     value:'12345'
    //   }
    // })
    userEvent.type(input,'12345')
    expect(screen.queryByTestId('value-elem')).toContainHTML('12345') 

  })
});
