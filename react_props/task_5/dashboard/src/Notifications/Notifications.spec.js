import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('Notifications', () => {

  it('does not display the close button, p element, or notification items when displayDrawer is false', () => {
    render(<Notifications />);
    expect(screen.queryByRole('button', { name: /close/i })).toBeNull();
    expect(screen.queryByText(/Here is the list of notifications/i)).toBeNull();
    expect(screen.queryByRole('listitem')).toBeNull();
  });

 
  it('displays the close button, p element, and notification items when displayDrawer is true', () => {
    const notificationsList = [
      { id: 1, type: 'default', value: 'Test notification' },
    ];
    render(<Notifications displayDrawer={true} listNotifications={notificationsList} />);
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

 
  it('displays "No new notification for now" when displayDrawer is true and listNotifications is empty', () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
    expect(screen.queryByText(/Here is the list of notifications/i)).toBeInTheDocument(); 
  });


  it('always displays "Your notifications" text', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();

    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
  });

  
  it('renders without crashing (with empty list)', () => {
    render(<Notifications listNotifications={[]} />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument(); 
    expect(screen.queryByText('No new notification for now')).toBeNull();
  });

  it('renders 3 notification items when listNotifications has 3 items', () => {
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    render(<Notifications displayDrawer={true} listNotifications={notificationsList} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText(/Urgent requirement/i)).toBeInTheDocument();
  });

  it('logs message when close button is clicked', () => {
    const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications displayDrawer={true} listNotifications={[]} />); 
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(consoleLog).toHaveBeenCalledWith('Close button has been clicked');
    consoleLog.mockRestore();
  });
});