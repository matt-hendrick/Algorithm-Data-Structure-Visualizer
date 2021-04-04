import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeapVisualizer from './HeapVisualizer';

describe('HeapVisualizer tests', () => {
  it(`HeapVisualizer initializes, adds, removes
    correctly for MinHeap and MaxHeap`, () => {
    render(<HeapVisualizer />);

    expect(
      screen.getByText(/Add a new Node to visualize a new Heap/)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '1');
    expect(screen.getByRole('textbox')).toHaveValue('1');

    userEvent.click(screen.getByRole('button', { name: /insert node/i }));

    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clear heap/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Heap/)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '1');
    expect(screen.getByRole('textbox')).toHaveValue('1');

    userEvent.click(screen.getByRole('button', { name: /insert node/i }));

    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '-3');
    expect(screen.getByRole('textbox')).toHaveValue('-3');

    userEvent.click(screen.getByRole('button', { name: /insert node/i }));

    expect(screen.getByText('-3')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '-5');
    expect(screen.getByRole('textbox')).toHaveValue('-5');

    userEvent.click(screen.getByRole('button', { name: /insert node/i }));

    expect(screen.getByText('-5')).toBeInTheDocument();

    const nodeNegative5 = screen.getByText('-5');

    userEvent.click(screen.getByRole('button', { name: /remove root node/i }));

    expect(nodeNegative5).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /remove root node/i }));

    userEvent.type(screen.getByRole('textbox'), '-3');
    expect(screen.getByRole('textbox')).toHaveValue('-3');

    userEvent.click(screen.getByRole('button', { name: /remove root node/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Heap/)
    ).toBeInTheDocument();

    // Max Heap

    userEvent.click(
      screen.getByRole('button', { name: /convert to max heap/i })
    );

    userEvent.type(screen.getByRole('textbox'), '1');
    expect(screen.getByRole('textbox')).toHaveValue('1');

    userEvent.click(screen.getByRole('button', { name: /insert node/i }));

    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clear heap/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Heap/)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '1');
    expect(screen.getByRole('textbox')).toHaveValue('1');

    userEvent.click(screen.getByRole('button', { name: /insert node/i }));

    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '-3');
    expect(screen.getByRole('textbox')).toHaveValue('-3');

    userEvent.click(screen.getByRole('button', { name: /insert node/i }));

    expect(screen.getByText('-3')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '5');
    expect(screen.getByRole('textbox')).toHaveValue('5');

    userEvent.click(screen.getByRole('button', { name: /insert node/i }));

    expect(screen.getByText('5')).toBeInTheDocument();

    const node5 = screen.getByText('5');

    userEvent.click(screen.getByRole('button', { name: /remove root node/i }));

    expect(node5).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /remove root node/i }));

    userEvent.type(screen.getByRole('textbox'), '-3');
    expect(screen.getByRole('textbox')).toHaveValue('-3');

    userEvent.click(screen.getByRole('button', { name: /remove root node/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Heap/)
    ).toBeInTheDocument();
  });
});
