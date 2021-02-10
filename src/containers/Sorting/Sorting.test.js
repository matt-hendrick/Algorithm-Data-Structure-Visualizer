import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sorting from './Sorting';

describe('Sorting tests', () => {
  it('Runs bubble sort when bubble sort button selected', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /bubble sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with bubble sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
  });

  it('Runs insertion sort when insertion sort button selected', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /insertion sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with insertion sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
  });

  it('Runs selection sort when selection sort button selected', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /selection sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with selection sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
  });

  it('Runs quick sort when quick sort button selected', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /quick sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with quick sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
  });

  it('Runs merge sort when merge sort button selected', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /merge sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with merge sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
  });

  it('Runs heap sort when heap sort button selected', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /heap sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with heap sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
  });

  it('Runs bogo sort when bogo sort button selected', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /bogo sort/i }));
    expect(
      screen.getByRole('heading', { name: /bogo sort's average run time is/i })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
  });
});
