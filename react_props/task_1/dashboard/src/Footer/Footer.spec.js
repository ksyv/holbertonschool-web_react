import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import * as utils from '../utils/utils';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the text "Copyright {current year} - Holberton School" when getFooterCopy is true', () => {
    jest.spyOn(utils, 'getFooterCopy').mockReturnValue('Holberton School');
    jest.spyOn(utils, 'getCurrentYear').mockReturnValue(2024);

    render(<Footer />);
    const currentYear = utils.getCurrentYear();
    const footerText = utils.getFooterCopy(true);

    expect(screen.getByText(new RegExp(`Copyright ${currentYear} - ${footerText}`, 'i'))).toBeInTheDocument();

    jest.restoreAllMocks();
  });
});