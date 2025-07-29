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

  it('renders Login component', () => {
    render(<App />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`copyright ${currentYear}`, 'i'))).toBeInTheDocument();
  });
});