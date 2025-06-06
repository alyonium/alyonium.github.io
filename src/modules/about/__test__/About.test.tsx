import React from 'react';
import About from '../About';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('About', () => {
  it('contains main photo with correct alt text', () => {
    render(<About />);

    expect(screen.getByAltText(/personal photo/i)).toBeInTheDocument();
  });
});
