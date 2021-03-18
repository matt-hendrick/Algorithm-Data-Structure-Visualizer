// This more optimal hash table is based upon this (https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial) by Adrian Mejia

export default class HashTable {
  constructor(
    initialCapacity = 16,
    buckets,
    loadFactor = 0.75,
    size = 0,
    collisions = 0,
    keys = []
  ) {
    // buckets is added here in order to allow the initialization of new HashTable from react state hashMap (so the state is not directly mutated)
    this.buckets = buckets ? buckets : new Array(initialCapacity);
    // loadFactor (Size/number of buckets) is how full the hash table is
    this.loadFactor = loadFactor;
    this.size = size;
    this.collisions = collisions;
    // keys is an array of all keys in the hash table
    this.keys = keys;
  }

  hash(key) {
    let hashValue = 0;
    // typeof used to distinguish between strings with same chars but diff type
    const stringTypeKey = `${key}${typeof key}`;

    for (let i = 0; i < stringTypeKey.length; i++) {
      const charCode = stringTypeKey.charCodeAt(i);
      // uses index of each char to bitshift charCode
      // this ensures that the same char in different positions will return different hashValues
      // means that anagrams should return different hash values
      hashValue += charCode << (i * 8);
    }

    return hashValue;
  }

  // gets the index of the bucket that the key falls into
  getBucketIndex(key) {
    const hashValue = this.hash(key);
    const bucketIndex = hashValue % this.buckets.length;
    return bucketIndex;
  }

  getIndexes(key) {
    // gets the bucket that the key is in
    const bucketIndex = this.getBucketIndex(key);
    // creates a var representing that bucket
    const bucketItems = this.buckets[bucketIndex] || [];

    for (let itemIndex = 0; itemIndex < bucketItems.length; itemIndex++) {
      // checks each item in the bucket
      // if any of the items are the key, return the bucketIndex and the itemIndex
      const item = bucketItems[itemIndex];
      if (item.key === key) {
        return { bucketIndex, itemIndex };
      }
    }

    // if key does not already exist, returns just bucketIndex
    return { bucketIndex };
  }

  set(key, value) {
    const { bucketIndex, itemIndex } = this.getIndexes(key);

    // if key does does not exist, initialize array and save key/value
    if (itemIndex === undefined) {
      const keyIndex = this.keys.push({ content: key }) - 1; // keep track of the key index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({ key, value, keyIndex });
      this.size++;
      // Keep count of collisions
      if (this.buckets[bucketIndex].length > 1) {
        this.collisions++;
      }
    }
    // if key already exists, override existing value
    else {
      this.buckets[bucketIndex][itemIndex].value = value;
    }

    // rehash if size/length is greater than loadFactor
    if (this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2);
    }

    return this;
  }

  // returns value of provided key (if key exists)
  get(key) {
    const bucketIndex = this.getBucketIndex(key);
    if (this.buckets[bucketIndex]) {
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
  }

  // returns a boolean establishing whether key exists
  has(key) {
    return !!this.get(key);
  }

  remove(key) {
    const { bucketIndex, itemIndex, keyIndex } = this.getIndexes(key);

    // if key does not exist, return false
    if (itemIndex === undefined) {
      return false;
    }

    // if there are collisions in the key's bucket, decrement collisions counter
    if (this.buckets[bucketIndex].length > 1 && this.collisions > 0) {
      this.collisions--;
    }

    // if key exists, removes from buckets/keys and decrements size counter
    this.buckets[bucketIndex].splice(itemIndex, 1);
    delete this.keys[keyIndex];
    this.size--;

    return true;
  }

  rehash(newCapacity) {
    // creates a new HashTable, double the previous capacity
    const newMap = new HashTable(newCapacity);

    // for each key in keys, adds key/value pair
    this.keys.forEach((key) => {
      if (key) {
        newMap.set(key.content, this.get(key.content));
      }
    });

    // update buckets, collisions, and keys
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    this.keys = newMap.keys;
  }

  getLoadFactor() {
    return this.size / this.buckets.length;
  }
}
