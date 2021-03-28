import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GraphVisualizer from './GraphVisualizer';

describe('GraphVisualizer tests', () => {
  it(`GraphVisualizer initializes, adds/removes vertices, and
    clears correctly`, () => {
    render(<GraphVisualizer />);
    let nodePrompt = screen.getByText(/Add a new Node/i);

    expect(nodePrompt).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/enter a new node value/i), '1');

    userEvent.click(screen.getByRole('button', { name: /Add Vertex/i }));

    expect(nodePrompt).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clear graph/i }));

    nodePrompt = screen.getByText(/Add a new Node/i);

    expect(nodePrompt).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/enter a new node value/i), '2');

    userEvent.click(screen.getByRole('button', { name: /Add Vertex/i }));

    expect(nodePrompt).not.toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/enter a new node value/i), '3');

    userEvent.click(screen.getByRole('button', { name: /Add Vertex/i }));

    userEvent.type(screen.getByPlaceholderText(/enter a new node value/i), '2');

    userEvent.click(screen.getByRole('button', { name: /Remove Vertex/i }));

    userEvent.type(screen.getByPlaceholderText(/enter a new node value/i), '3');

    userEvent.click(screen.getByRole('button', { name: /Remove Vertex/i }));

    nodePrompt = screen.getByText(/Add a new Node/i);

    expect(nodePrompt).toBeInTheDocument();
  });
});
