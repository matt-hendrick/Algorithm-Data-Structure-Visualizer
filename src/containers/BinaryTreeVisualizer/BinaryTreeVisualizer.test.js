import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BinaryTreeVisualizer from './BinaryTreeVisualizer';

describe('BinaryTreeVisualizer tests', () => {
  it(`BinaryTreeVisualizer initializes, adds from front/end, removes from front/end,
     and reverse correctly`, () => {
    render(<BinaryTreeVisualizer />);

    expect(
      screen.getByText(/Add a new Node to visualize a new Binary Tree/)
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '1');
    expect(screen.getByRole('textbox')).toHaveValue('1');

    userEvent.click(
      screen.getByRole('button', { name: /insert specified node/i })
    );

    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '-3');
    expect(screen.getByRole('textbox')).toHaveValue('-3');

    userEvent.click(
      screen.getByRole('button', { name: /insert specified node/i })
    );

    expect(screen.getByText('-3')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '5');
    expect(screen.getByRole('textbox')).toHaveValue('5');

    userEvent.click(
      screen.getByRole('button', { name: /insert specified node/i })
    );

    expect(screen.getByText('5')).toBeInTheDocument();

    const node5 = screen.getByText('5');

    userEvent.type(screen.getByRole('textbox'), '5');
    expect(screen.getByRole('textbox')).toHaveValue('5');

    userEvent.click(
      screen.getByRole('button', { name: /remove specified node/i })
    );

    expect(node5).not.toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), '1');
    expect(screen.getByRole('textbox')).toHaveValue('1');

    userEvent.click(
      screen.getByRole('button', { name: /remove specified node/i })
    );

    userEvent.type(screen.getByRole('textbox'), '-3');
    expect(screen.getByRole('textbox')).toHaveValue('-3');

    userEvent.click(
      screen.getByRole('button', { name: /remove specified node/i })
    );

    expect(
      screen.getByText(/Add a new Node to visualize a new Binary Tree/)
    ).toBeInTheDocument();
  });
});
