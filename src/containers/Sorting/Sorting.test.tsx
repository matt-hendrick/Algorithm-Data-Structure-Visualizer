import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sorting from './Sorting';

describe('Sorting tests', () => {
  it('Runs bubble sort when bubble sort button clicked', async () => {
    render(<Sorting />);

    userEvent.click(screen.getByRole('button', { name: /bubble sort/i }));

    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with bubble sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(56);
  });

  it('Runs insertion sort when insertion sort button clicked', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /insertion sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with insertion sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(56);
  });

  it('Runs selection sort when selection sort button clicked', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /selection sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with selection sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(56);
  });

  it('Runs quick sort when quick sort button clicked', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /quick sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with quick sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(31);
  });

  it('Runs merge sort when merge sort button clicked', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /merge sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with merge sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(7);
  });

  it('Runs heap sort when heap sort button clicked', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /heap sort/i }));
    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with heap sort/i,
      })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(31);
  });

  it('Runs bogo sort when bogo sort button clicked', async () => {
    render(<Sorting />);
    userEvent.click(screen.getByRole('button', { name: /bogo sort/i }));
    expect(
      screen.getByRole('heading', { name: /bogo sort's average run time is/i })
    ).toBeInTheDocument();
    await screen.findByRole('heading', { name: /current step: 1/i });
    await screen.findByRole('button', { name: /pause/i });
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(31);
  });

  it('Clears out sort info shuffle button clicked', async () => {
    render(<Sorting />);

    userEvent.click(screen.getByRole('button', { name: /shuffle/i }));

    const numberOfStepsHeading = screen.queryByRole('heading', {
      name: /Number of steps required to sort this array with /i,
    });
    const currentStepHeading = screen.queryByRole('heading', {
      name: /current step: 1/i,
    });
    const pauseButton = screen.queryByRole('button', { name: /pause/i });
    expect(currentStepHeading).not.toBeInTheDocument();
    expect(pauseButton).not.toBeInTheDocument();
    expect(numberOfStepsHeading).not.toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(25);
  });

  it('Clears out sort info generate a new array button clicked', async () => {
    render(<Sorting />);

    userEvent.click(
      screen.getByRole('button', { name: /generate a new array/i })
    );

    const numberOfStepsHeading = screen.queryByRole('heading', {
      name: /Number of steps required to sort this array with /i,
    });
    const currentStepHeading = screen.queryByRole('heading', {
      name: /current step: 1/i,
    });
    const pauseButton = screen.queryByRole('button', { name: /pause/i });
    expect(currentStepHeading).not.toBeInTheDocument();
    expect(pauseButton).not.toBeInTheDocument();
    expect(numberOfStepsHeading).not.toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(25);
  });
});
