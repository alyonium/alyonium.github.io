import React from 'react';
import Cover from '../Cover';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Cover', () => {
  it('renders the heading', () => {
    render(<Cover />);

    const headingElement = screen.getByRole('heading', {
      name: /alyonium/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
