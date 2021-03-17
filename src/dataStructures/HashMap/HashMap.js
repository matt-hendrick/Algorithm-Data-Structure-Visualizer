export default class HashMap {
  constructor(initialCapacity = 8, buckets) {
    this.buckets = buckets ? buckets : new Array(initialCapacity);
    this.collisons = 0;
  }

  set(key, value) {
    const bucketIndex = this.getIndex(key);
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, value });
      if (this.buckets[bucketIndex].length > 1) {
        this.collisons++;
      }
    } else {
      this.buckets[bucketIndex] = [{ key, value }];
    }
    return this;
  }

  get(key) {
    const bucketIndex = this.getIndex(key);
    for (
      let arrIndex = 0;
      arrIndex < this.buckets[bucketIndex].length;
      arrIndex++
    ) {
      const entry = this.buckets[bucketIndex][arrIndex];
      if (entry.key === key) {
        return entry.value;
      }
    }
  }

  hash(key) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let i = 0; i < stringTypeKey.length; i++) {
      const charCode = stringTypeKey.charCodeAt(i);
      hashValue += charCode << (i * 8);
    }

    return hashValue;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}
