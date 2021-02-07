import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const swap = (array, from, to) => {
  [array[from], array[to]] = [array[to], array[from]];
};

export const shuffle = (array) => {
  for (let index = 0; index < array.length; index++) {
    const newIndex = Math.floor(Math.random() * array.length);
    swap(array, index, newIndex);
  }
  return array;
};

export const isSorted = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1][0] > array[i][0]) {
      return false;
    }
  }
  return true;
};
