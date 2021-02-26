import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StackVisualizer from './StackVisualizer';

describe('StackVisualizer tests', () => {
  it('StackVisualizer initializes, adds/removes nodes correctly', () => {
    render(<StackVisualizer />);

    userEvent.type(screen.getByRole('textbox'), '3');
    expect(screen.getByRole('textbox')).toHaveValue('3');

    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));

    expect(screen.getByText('3')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '5');
    expect(screen.getByRole('textbox')).toHaveValue('5');

    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /remove from stack/i }));

    expect(screen.getByText('3')).toBeInTheDocument();

    const node = screen.getByText('3');

    userEvent.click(screen.getByRole('button', { name: /remove from stack/i }));

    expect(node).not.toBeInTheDocument();
  });
});
