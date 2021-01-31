function swap(array, from, to) {
  [array[from], array[to]] = [array[to], array[from]];
}

function shuffle(array) {
  for (let index = 0; index < array.length; index++) {
    const newIndex = Math.floor(Math.random() * array.length);
    swap(array, index, newIndex);
  }
  return array;
}

module.exports = {
  swap,
  shuffle,
};
