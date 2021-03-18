import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HashTableVisualizer from './HashTableVisualizer';

describe('Hash Table Visualizer tests', () => {
  it('Hash Table Visualizer renders, adds, removes, rehashes, and clears correctly', () => {
    render(<HashTableVisualizer />);

    expect(
      screen.getByText(/Add a new Node to visualize a new Hash Table/)
    ).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/enter a new key/i), '1');
    userEvent.type(screen.getByPlaceholderText(/enter a new value/i), '10');
    expect(screen.getByPlaceholderText(/enter a new key/i)).toHaveValue('1');
    expect(screen.getByPlaceholderText(/enter a new value/i)).toHaveValue('10');

    userEvent.click(
      screen.getByRole('button', { name: /insert key\/value pair/i })
    );

    expect(screen.getByText(/key: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/, value: 10/i)).toBeInTheDocument();
    expect(screen.getByText(/bucket # 16/i)).toBeInTheDocument();
    expect(screen.getAllByText(/No items in this bucket/i).length).toBe(15);

    userEvent.type(screen.getByPlaceholderText(/enter a new key/i), '1');
    userEvent.type(screen.getByPlaceholderText(/enter a new value/i), '5');
    expect(screen.getByPlaceholderText(/enter a new key/i)).toHaveValue('1');
    expect(screen.getByPlaceholderText(/enter a new value/i)).toHaveValue('5');

    userEvent.click(
      screen.getByRole('button', { name: /insert key\/value pair/i })
    );

    expect(screen.getByText(/key: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/, value: 5/i)).toBeInTheDocument();
    expect(screen.getByText(/bucket # 16/i)).toBeInTheDocument();
    expect(screen.getAllByText(/No items in this bucket/i).length).toBe(15);

    userEvent.type(screen.getByPlaceholderText(/enter a new key/i), '23');
    userEvent.type(screen.getByPlaceholderText(/enter a new value/i), '54');
    expect(screen.getByPlaceholderText(/enter a new key/i)).toHaveValue('23');
    expect(screen.getByPlaceholderText(/enter a new value/i)).toHaveValue('54');

    userEvent.click(
      screen.getByRole('button', { name: /insert key\/value pair/i })
    );

    userEvent.type(screen.getByPlaceholderText(/enter a new key/i), '3');
    userEvent.type(screen.getByPlaceholderText(/enter a new value/i), '4');
    expect(screen.getByPlaceholderText(/enter a new key/i)).toHaveValue('3');
    expect(screen.getByPlaceholderText(/enter a new value/i)).toHaveValue('4');

    userEvent.click(
      screen.getByRole('button', { name: /insert key\/value pair/i })
    );

    expect(screen.getByText(/key: 23/i)).toBeInTheDocument();
    expect(screen.getByText(/, value: 54/i)).toBeInTheDocument();
    expect(screen.getByText(/key: 3/i)).toBeInTheDocument();
    expect(screen.getByText(/, value: 4/i)).toBeInTheDocument();
    expect(screen.getAllByText(/No items in this bucket/i).length).toBe(13);

    const key3 = screen.getByText(/key: 3/i);

    userEvent.type(screen.getByPlaceholderText(/enter a new key/i), '3');
    userEvent.click(
      screen.getByRole('button', { name: /remove specified key/i })
    );

    expect(key3).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /clear hash table/i }));

    expect(
      screen.getByText(/Add a new Node to visualize a new Hash Table/)
    ).toBeInTheDocument();
  });
});
