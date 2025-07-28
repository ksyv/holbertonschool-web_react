import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

  // Test 1
  test('renders h1 with text "School dashboard"', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /school dashboard/i })).toBeInTheDocument();
  });

  // Test 2
  test('renders "Login to access the full dashboard" text', () => {
    render(<App />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  // Test 3
  test('renders "Copyright {current year} - holberton School" text', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`copyright ${currentYear} - holberton school`, 'i'))).toBeInTheDocument();
  });

  // Test 4
  test('renders an img element with alt text "holberton logo"', () => {
    render(<App />);
    expect(screen.getByRole('img', { name: /holberton logo/i })).toBeInTheDocument();
  });

  // Test 5
  test('renders 2 input elements', () => {
    const { container } = render(<App />);
    const inputElements = container.querySelectorAll('input');
    expect(inputElements.length).toBe(2);
  });

  // Test 6
  test('renders 2 label elements with "Email" and "Password" text', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  // Test 7
  test('renders a button with the text "OK"', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});