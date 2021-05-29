import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QueueVisualizer from './QueueVisualizer';

describe('QueueVisualizer tests', () => {
  it('QueueVisualizer initializes, adds/removes nodes correctly', () => {
    render(<QueueVisualizer />);

    expect(
      screen.getByText(/Add a new Node to visualize a new Queue/i)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '3');
    expect(screen.getByRole('textbox')).toHaveValue('3');

    userEvent.click(screen.getByRole('button', { name: /add to queue/i }));

    expect(screen.getByText('3')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clear queue/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Queue/i)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '3');
    expect(screen.getByRole('textbox')).toHaveValue('3');

    userEvent.click(screen.getByRole('button', { name: /add to queue/i }));

    expect(screen.getByText('3')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '5');
    expect(screen.getByRole('textbox')).toHaveValue('5');

    userEvent.click(screen.getByRole('button', { name: /add to queue/i }));

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /remove from queue/i }));

    expect(screen.getByText('5')).toBeInTheDocument();

    const node = screen.getByText('5');

    userEvent.click(screen.getByRole('button', { name: /remove from queue/i }));

    expect(node).not.toBeInTheDocument();
  });

  it('QueueVisualizer generateRandomQueue correctly generates a queue', () => {
    render(<QueueVisualizer />);

    let addNodePromptText = screen.getByText(
      /Add a new Node to visualize a new Queue/i
    );

    expect(addNodePromptText).toBeInTheDocument();

    userEvent.click(
      screen.getByRole('button', { name: /generate random queue/i })
    );

    expect(addNodePromptText).not.toBeInTheDocument();
  });
});
