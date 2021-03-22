import { render, screen } from '@testing-library/react';
import HomeCard from './HomeCard';

describe('HomeCard tests', () => {
  it('HomeCard initializes and displays correct text and link', () => {
    render(<HomeCard header="Stack Visualizer" />);

    expect(screen.getByText(/Stack Visualizer/i)).toBeInTheDocument();
  });
});
