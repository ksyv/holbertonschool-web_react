import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('Notifications', () => {

  it('renders without crashing', () => {
    render(<Notifications listNotifications={[]} />);
  });

  it('renders the notifications title', () => {
    render(<Notifications listNotifications={[]} />);
    const titleElement = screen.getByText(/here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the close button', () => {
    render(<Notifications listNotifications={[]} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('renders "No new notification for now" when listNotifications is empty', () => {
    render(<Notifications listNotifications={[]} />);
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
  });

  it('renders 3 notification items when listNotifications has 3 items', () => {
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    render(<Notifications listNotifications={notificationsList} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText(/Urgent requirement/i)).toBeInTheDocument();
  });

  it('logs message when close button is clicked', () => {
    const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications listNotifications={[]} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(consoleLog).toHaveBeenCalledWith('Close button has been clicked');
    consoleLog.mockRestore();
  });
});