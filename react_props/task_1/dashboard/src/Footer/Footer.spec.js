import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the text "Copyright {current year} - Holberton School" when getFooterCopy is true', () => {
    render(<Footer />);
    const currentYear = getCurrentYear();
    const footerText = getFooterCopy(true);
    expect(screen.getByText(new RegExp(`Copyright ${currentYear} - ${footerText}`, 'i'))).toBeInTheDocument();
  });
});