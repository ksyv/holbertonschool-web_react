import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders correct text content in p elements', () => {
    render(<Footer />);
    const currentYear = getCurrentYear();
    const footerText = getFooterCopy(false); 
    const footerParagraph = screen.getByText(
      new RegExp(`copyright ${currentYear} - ${footerText}`, 'i')
    );
    expect(footerParagraph).toBeInTheDocument();
  });
});