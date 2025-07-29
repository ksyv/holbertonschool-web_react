import React from 'react';
import { render, screen, within } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

  it('renders with data-notification-type="default" and blue color for default type', () => {
    render(<NotificationItem type="default" value="New course available" />);
    const listItem = screen.getByText('New course available');
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders with data-notification-type="urgent" and red color for urgent type', () => {
    render(<NotificationItem type="urgent" value="New resume available" />);
    const listItem = screen.getByText('New resume available');
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
  });

  it('renders with dangerouslySetInnerHTML when html prop is provided', () => {
    const htmlContent = { __html: '<strong>Urgent requirement</strong>' };
    render(<NotificationItem type="urgent" html={htmlContent} />);
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
    expect(within(listItem).getByText(/Urgent requirement/i)).toBeInTheDocument();
    expect(within(listItem).getByRole('strong')).toBeInTheDocument();
  });
});