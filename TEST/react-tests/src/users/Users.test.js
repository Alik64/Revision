import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Users from "./Users";

jest.mock("axios");

describe("<Users/>", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
        },
      ],
    };
  });

  test("users rendering", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(5);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});
