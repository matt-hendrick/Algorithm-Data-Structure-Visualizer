import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LinkedListVisualizer from './LinkedListVisualizer';

describe('LinkedListVisualizer tests', () => {
  it(`LinkedListVisualizer initializes, adds from front/end, removes from front/end,
   clears, and reverses correctly`, () => {
    render(<LinkedListVisualizer />);

    expect(
      screen.getByText(/Add a new Node to visualize a new Linked List/i)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '3');
    expect(screen.getByRole('textbox')).toHaveValue('3');

    userEvent.click(
      screen.getByRole('button', { name: /add to front of the list/i })
    );

    expect(screen.getByText('3')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clear list/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Linked List/i)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '3');
    expect(screen.getByRole('textbox')).toHaveValue('3');

    userEvent.click(
      screen.getByRole('button', { name: /add to end of the list/i })
    );

    expect(screen.getByText('3')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clear list/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Linked List/i)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '3');
    expect(screen.getByRole('textbox')).toHaveValue('3');

    userEvent.click(
      screen.getByRole('button', { name: /add to front of the list/i })
    );

    expect(screen.getByText('3')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '5');
    expect(screen.getByRole('textbox')).toHaveValue('5');

    userEvent.click(
      screen.getByRole('button', { name: /add to end of the list/i })
    );

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '7');
    expect(screen.getByRole('textbox')).toHaveValue('7');

    userEvent.click(
      screen.getByRole('button', { name: /add to front of the list/i })
    );

    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /reverse the list/i }));

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();

    userEvent.click(
      screen.getByRole('button', { name: /remove from front of the list/i })
    );

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();

    userEvent.click(
      screen.getByRole('button', { name: /remove from end of the list/i })
    );

    expect(screen.getByText('3')).toBeInTheDocument();

    const node = screen.getByText('3');

    userEvent.click(
      screen.getByRole('button', { name: /remove from front of the list/i })
    );

    expect(node).not.toBeInTheDocument();
  });
});
