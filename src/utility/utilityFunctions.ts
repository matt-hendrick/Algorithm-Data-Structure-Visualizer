import { useEffect, useRef } from 'react';

export const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback as Function;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
      else return;
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    } else return;
  }, [delay]);
};

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const swap = (
  array: number[] | number[][],
  from: number,
  to: number
) => {
  [array[from], array[to]] = [array[to], array[from]];
};

export const shuffle = (array: number[] | number[][]) => {
  for (let index = 0; index < array.length; index++) {
    const newIndex = Math.floor(Math.random() * array.length);
    swap(array, index, newIndex);
  }
  return array;
};

export const isSorted = (array: number[][]) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1][0] > array[i][0]) {
      return false;
    }
  }
  return true;
};

export const googleAnalytics = () => {
  if (window.gtag && process.env.REACT_APP_FIREBASE_MEASUREMENT_ID) {
    window.gtag('config', process.env.REACT_APP_FIREBASE_MEASUREMENT_ID, {
      page_title: document.title,
      page_path: window.location.pathname + window.location.search,
    });
  }
};
