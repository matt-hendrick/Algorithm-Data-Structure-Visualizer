import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
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
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function swap(array, from, to) {
  [array[from], array[to]] = [array[to], array[from]];
}

export function shuffle(array) {
  for (let index = 0; index < array.length; index++) {
    const newIndex = Math.floor(Math.random() * array.length);
    swap(array, index, newIndex);
  }
  return array;
}
