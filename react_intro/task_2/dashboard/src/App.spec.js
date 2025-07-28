import { render, screen } from '@testing-library/react';
import App from './App.jsx'

test('Renders h1 element with "School Dashboard text"', () => {
    render(<App />);

    const headingElement = screen.getByRole('heading', {
        name: /school dashboard/i
    });

    expect(headingElement).toBeInTheDocument();
});

test('Renders correct text content in p elements', () => {
    render(<App />);

    const bodyParagraph = screen.getByText(/login to access the full dashboard/i);
    expect(bodyParagraph).toBeInTheDocument();

    const footerText = screen.getByText(/copyright/i);

    expect(footerText).toBeInTheDocument();
});

test('renders img element', () => {
    render(<App />);

    const imgElement = screen.getByAltText(/holberton logo/i);
    expect(imgElement).toBeInTheDocument();
});

test('Render 2 input elements', () => {
    render(<App />)

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();

    expect(passwordInput).toBeInTheDocument();
});

test('Render 2 label elements with the text "Email:" and "Password:"', () => {
    render(<App />);

    const emailLabel = screen.getByText(/email:/i);
    const passwordLabel = screen.getByText(/password:/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
});

test('Render a button with the text "OK"', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
});