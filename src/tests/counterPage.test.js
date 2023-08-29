import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CounterPage from "../pages/CounterPage";

test("le compteur démarre à zéro", () => {
    const { getByText } = render(<CounterPage />);
    const countElement = getByText("0");
    expect(countElement).toBeInTheDocument();
});

test("incrémenter le compteur", () => {
    const { getByText } = render(<CounterPage />);
    const incrementButton = getByText("Incrémenter");
    const countElement = getByText("0");

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("1");
});

test("décrémenter le compteur", () => {
    const { getByText } = render(<CounterPage />);
    const incrementButton = getByText("Incrémenter");
    const decrementButton = getByText("Décrémenter");
    const countElement = getByText("0");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("1");
});

test("ne pas décrémenter en dessous de zéro", () => {
    const { getByText } = render(<CounterPage />);
    const decrementButton = getByText("Décrémenter");
    const countElement = getByText("0");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("0"); // Le compteur ne devrait pas être négatif
});
