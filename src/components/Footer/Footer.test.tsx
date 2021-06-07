import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('LeafletMap tests', () => {
  it('renders iNaturalist link', () => {
    render(<Footer />);
    expect(screen.getByText(`View on GitHub`).closest('a')).toHaveAttribute(
      'href',
      'https://github.com/matt-hendrick/Algorithm-Data-Structure-Visualizer'
    );
  });
});
