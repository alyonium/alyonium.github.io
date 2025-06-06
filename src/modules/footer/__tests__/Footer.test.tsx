import React from 'react';
import Footer from '../Footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('renders the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();

    expect(screen.getByText(new RegExp(currentYear, 'i'))).toBeInTheDocument();
  });
});
