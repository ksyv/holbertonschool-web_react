import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('includes 2 label, 2 inputs, and 1 button elements', () => {
    render(<Login />);
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText(/password:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });

  it('inputs elements get focused when the related label is clicked', () => {
    render(<Login />);
    const emailLabel = screen.getByText(/email:/i);
    const emailInput = screen.getByLabelText(/email:/i);

    fireEvent.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});