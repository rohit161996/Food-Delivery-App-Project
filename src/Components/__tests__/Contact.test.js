import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
    it('Should load the Heading in the Contact Us Component', () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it('Should load the Button inside the Contact Component', () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('Should load the Button inside the Contact Component', () => {
        render(<Contact />);
        const buttonSubmit = screen.getByText("Submit");
        expect(buttonSubmit).toBeInTheDocument();
    });

    test('Should load the placeholder in the input text', () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    });

    test('Should load two input boxes', () => {
        render(<Contact />);
        const inputs = screen.getAllByPlaceholderText("Name");
        expect(inputs.length).toBeGreaterThan(0);
    });

    test('Should load two input boxes', () => {
        render(<Contact />);
        const inputs = screen.getAllByRole("textbox");
        expect(inputs.length).toBeGreaterThan(1);
    });
});
