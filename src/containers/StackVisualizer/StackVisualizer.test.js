import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StackVisualizer from './StackVisualizer';

describe('StackVisualizer tests', () => {
  it('StackVisualizer initializes, adds/removes nodes correctly', () => {
    render(<StackVisualizer />);

    expect(
      screen.getByText(/Add a new Node to visualize a new Stack/i)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '3');
    expect(screen.getByRole('textbox')).toHaveValue('3');

    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));

    expect(screen.getByText('3')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clear stack/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Stack/i)
    ).toBeInTheDocument();

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

  it('StackVisualizer displays Stack Overflow alert if user attempts to add 15th node', () => {
    render(<StackVisualizer />);

    userEvent.type(screen.getByRole('textbox'), '1');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '2');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '3');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '4');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '5');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '6');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '7');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '8');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '9');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '10');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '11');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '12');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '13');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '14');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));
    userEvent.type(screen.getByRole('textbox'), '15');
    userEvent.click(screen.getByRole('button', { name: /add to stack/i }));

    const stackOverFlowText = screen.getByText(/stack overflow/i);
    expect(screen.getByText(/stack overflow/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /close alert/i }));

    expect(stackOverFlowText).not.toBeInTheDocument();
  });
});
