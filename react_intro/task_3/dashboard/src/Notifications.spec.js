import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {

  // Test 1
  test('renders "Here is the list of notifications" text', () => {
    render(<Notifications />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  // Test 2
  test('renders a close button', () => {
    render(<Notifications />);
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  // Test 3
  test('renders 3 list items', () => {
    const { container } = render(<Notifications />);
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(3);
  });

  // Test 4
  test('logs "Close button has been clicked" when close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });

  // Test 5
  test('renders "New course available" list item (case-insensitive)', () => {
    render(<Notifications />);
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
  });

  // Test 6
  test('renders "New resume available" list item (case-insensitive)', () => {
    render(<Notifications />);
    expect(screen.getByText(/new resume available/i)).toBeInTheDocument();
  });

  // Test 7
  test('renders "Urgent requirement - complete by EOD" list item (case-insensitive)', () => {
    render(<Notifications />);
    expect(screen.getByText(/urgent requirement - complete by eod/i)).toBeInTheDocument();
  });
});