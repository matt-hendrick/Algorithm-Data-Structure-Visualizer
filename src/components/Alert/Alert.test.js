import { render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('Alert tests', () => {
  it('Alert initializes and displays correct text and link', () => {
    render(<Alert />);

    expect(
      screen.getByText(/The stack has reached the maximum number of nodes!/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Stack Overflow!/i)).toBeInTheDocument();
  });
});
