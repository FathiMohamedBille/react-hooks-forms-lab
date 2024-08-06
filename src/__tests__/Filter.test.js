import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import App from "../components/App";


test("the input field acts as a controlled input", () => {
  const onSearchChange = jest.fn();
  render(<Filter search="testing" onSearchChange={onSearchChange} />);

  const input = screen.getByPlaceholderText(/Search/);
  expect(input.value).toBe("testing");

  fireEvent.change(input, { target: { value: "new value" } });
  expect(onSearchChange).toHaveBeenCalledWith("new value");
});

test("the shopping filters based on the search term to include full matches", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/Search/), {
    target: { value: "Yogurt" },
  });

  expect(screen.getByText("Yogurt")).toBeInTheDocument();
  expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
});

test("the shopping filters based on the search term to include partial matches", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/Search/), {
    target: { value: "Cheese" },
  });

  expect(screen.getByText("Swiss Cheese")).toBeInTheDocument();
  expect(screen.getByText("String Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
  expect(screen.queryByText("Yogurt")).not.toBeInTheDocument();
});