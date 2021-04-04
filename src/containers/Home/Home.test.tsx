import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home tests', () => {
  it('Home correctly initializes and displays correct text', () => {
    render(<Home />);

    expect(screen.getByText(/Algorithm Visualizer Links/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Data Structure Visualizer Links/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Sorting Algorithms Visualizer/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Algorithm Visualizer Links/i)).toBeInTheDocument();
    expect(screen.getByText(/Stack Visualizer/i)).toBeInTheDocument();
    expect(screen.getByText(/Linked List Visualizer/i)).toBeInTheDocument();
    expect(screen.getByText(/Queue Visualizer/i)).toBeInTheDocument();
    expect(screen.getByText(/Binary Tree Visualizer/i)).toBeInTheDocument();
    expect(screen.getByText(/Hash Table Visualizer/i)).toBeInTheDocument();
    expect(screen.getByText(/Heap Visualizer/i)).toBeInTheDocument();
  });
});
