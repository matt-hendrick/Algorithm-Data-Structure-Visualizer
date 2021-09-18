import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer tests', () => {
  it('renders my Github link', () => {
    render(<Footer />);
    expect(screen.getByText(`View on GitHub`).closest('a')).toHaveAttribute(
      'href',
      'https://github.com/matt-hendrick/Algorithm-Data-Structure-Visualizer'
    );
  });
});
