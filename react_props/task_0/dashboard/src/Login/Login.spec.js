import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders correct text content in p elements', () => {
    render(<Login />);
    const bodyParagraph = screen.getByText(/login to access the full dashboard/i);
    expect(bodyParagraph).toBeInTheDocument();
  });

  it('renders 2 input elements', () => {
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('renders 2 label elements with the text "Email:" and "Password:"', () => {
    render(<Login />);
    const emailLabel = screen.getByText(/email:/i);
    const passwordLabel = screen.getByText(/password:/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  it('renders a button with the text "OK"', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});