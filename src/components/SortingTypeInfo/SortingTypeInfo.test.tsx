import React from 'react';
import { render, screen } from '@testing-library/react';
import SortingTypeInfo from './SortingTypeInfo';

describe('SortingTypeInfo tests', () => {
  it('SortingTypeInfo correctly displays Bubble Sort info', () => {
    render(
      <SortingTypeInfo
        sortingType="Bubble Sort"
        sortingSteps={[...Array(10)]}
        currentStep={14}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with bubble sort: 10/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/current step: 14/i)).toBeInTheDocument();
  });

  it('SortingTypeInfo correctly displays Insertion Sort info', () => {
    render(
      <SortingTypeInfo
        sortingType="Insertion Sort"
        sortingSteps={[...Array(10)]}
        currentStep={14}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with insertion sort: 10/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/current step: 14/i)).toBeInTheDocument();
  });

  it('SortingTypeInfo correctly displays Selection Sort info', () => {
    render(
      <SortingTypeInfo
        sortingType="Selection Sort"
        sortingSteps={[...Array(10)]}
        currentStep={14}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with selection sort: 10/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/current step: 14/i)).toBeInTheDocument();
  });

  it('SortingTypeInfo correctly displays Merge Sort info', () => {
    render(
      <SortingTypeInfo
        sortingType="Merge Sort"
        sortingSteps={[...Array(10)]}
        currentStep={14}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with merge sort: 10/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/current step: 14/i)).toBeInTheDocument();
  });

  it('SortingTypeInfo correctly displays Heap Sort info', () => {
    render(
      <SortingTypeInfo
        sortingType="Heap Sort"
        sortingSteps={[...Array(10)]}
        currentStep={14}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with heap sort: 10/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/current step: 14/i)).toBeInTheDocument();
  });

  it('SortingTypeInfo correctly displays Quick Sort info', () => {
    render(
      <SortingTypeInfo
        sortingType="Quick Sort"
        sortingSteps={[...Array(10)]}
        currentStep={14}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with quick sort: 10/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/current step: 14/i)).toBeInTheDocument();
  });

  it('SortingTypeInfo correctly displays Bogo Sort info', () => {
    render(<SortingTypeInfo sortingType="Bogo Sort" currentStep={14} />);

    expect(
      screen.getByRole('heading', {
        name: /Number of steps required to sort this array with bogo sort/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/current step: 14/i)).toBeInTheDocument();
  });
});
