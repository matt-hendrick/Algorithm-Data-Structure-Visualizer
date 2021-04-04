import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar tests', () => {
  it('Navbar correctly initializes and displays correct text', () => {
    render(<Navbar />);

    expect(
      screen.getByText(/Algorithm and Data Structure Visualizer/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Algorithms/i)).toBeInTheDocument();
    expect(screen.getByText(/Data Structures/i)).toBeInTheDocument();
  });
});
