import { render, screen } from '@testing-library/react';
import Experience from '../Experience';
import '@testing-library/jest-dom';

describe('Experience', () => {
  it('renders without crashing', () => {
    render(<Experience />);

    expect(screen.getAllByText(/FORS/i)).toHaveLength(2);
  });

  it('displays all main projects', () => {
    render(<Experience />);

    expect(
      screen.getByText(/Veterinary Pharma Monitoring/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Social Services Platform/i)).toBeInTheDocument();
  });

  it('renders correct work periods', () => {
    render(<Experience />);

    expect(screen.getByText(/Oct 2020 – May 2025/i)).toBeInTheDocument();
    expect(screen.getByText(/Sep 2019 – Oct 2020/i)).toBeInTheDocument();
  });
});
