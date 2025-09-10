import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders Notifications component', () => {
    render(<App />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  it('renders Header component', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /school dashboard/i })).toBeInTheDocument();
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`copyright ${currentYear}`, 'i'))).toBeInTheDocument();
  });

  it('renders Login component when isLoggedIn is false', () => {
    render(<App />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
    expect(screen.queryByRole('table', { name: /courselist/i })).toBeNull();
  });

  it('renders CourseList component when isLoggedIn is true', () => {

  });

describe('key down event', () => {
    const originalAlert = window.alert;
    const alertMock = jest.fn();
    const logOutMock = jest.fn();

    beforeAll(() => {
      window.alert = alertMock;
    });

    afterAll(() => {
      window.alert = originalAlert;
    });

    it('calls logOut function when ctrl+h is pressed', () => {
      render(<App logOut={logOutMock} />);
      fireEvent.keyDown(document, { key: 'h', ctrlKey: true });
      expect(logOutMock).toHaveBeenCalledTimes(1);
    });

    it('calls alert with "Logging you out" when ctrl+h is pressed', () => {
      render(<App />);
      fireEvent.keyDown(document, { key: 'h', ctrlKey: true });
      expect(alertMock).toHaveBeenCalledWith('Logging you out');
    });
  });
});