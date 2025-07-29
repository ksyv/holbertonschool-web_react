import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders h1 element with "School Dashboard text"', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading', {
      name: /school dashboard/i
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders img element', () => {
    render(<Header />);
    const imgElement = screen.getByAltText(/holberton logo/i);
    expect(imgElement).toBeInTheDocument();
  });
});