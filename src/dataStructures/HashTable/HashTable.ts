// This more optimal hash table is based upon this (https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial) by Adrian Mejia

export default class HashTable {
  buckets:
    | {
        key: string | number;
        value: string | number;
        keyIndex: number;
        valueIndex: number;
      }[][]
    | [];
  loadFactor: number;
  size: number;
  collisions: number;
  keysArray: { content: string | number }[];
  valuesArray: { content: string | number }[];

  constructor(
    initialCapacity = 4,
    buckets?:
      | {
          key: string | number;
          value: string | number;
          keyIndex: number;
          valueIndex: number;
        }[][]
      | [],
    loadFactor = 0.75,
    size = 0,
    collisions = 0,
    keysArray = [] as { content: string | number }[],
    valuesArray = [] as { content: string | number }[]
  ) {
    // buckets is added here in order to allow the initialization of new HashTable from react state hashMap (so the state is not directly mutated)
    this.buckets = buckets ? buckets : new Array(initialCapacity);
    // loadFactor (Size/number of buckets) is how full the hash table is
    this.loadFactor = loadFactor;
    this.size = size;
    this.collisions = collisions;
    // keys is an array of all keys in the hash table
    this.keysArray = keysArray;
    this.valuesArray = valuesArray;
  }

  hash(key: string | number) {
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
  getBucketIndex(key: string | number) {
    const hashValue = this.hash(key);
    const bucketIndex = hashValue % this.buckets.length;
    return bucketIndex;
  }

  getIndexes(key: string | number) {
    // gets the index of the bucket that the key falls into
    const bucketIndex = this.getBucketIndex(key);
    // creates a var representing that bucket
    const bucketItems = this.buckets[bucketIndex] || [];

    for (let itemIndex = 0; itemIndex < bucketItems.length; itemIndex++) {
      // checks each item in the bucket
      // if any of the items are the key, return the bucketIndex and the itemIndex
      const item = bucketItems[itemIndex];
      if (item.key === key) {
        // extracts index of item in keys
        const keyIndex = item.keyIndex;
        const valueIndex = item.valueIndex;
        return { bucketIndex, itemIndex, keyIndex, valueIndex };
      }
    }

    // if key does not already exist, returns just bucketIndex
    return { bucketIndex };
  }

  set(key: string | number, value: string | number) {
    const { bucketIndex, itemIndex } = this.getIndexes(key);

    // if key does does not exist, initialize array and save key/value
    if (itemIndex === undefined) {
      const keyIndex = this.keysArray.push({ content: key }) - 1; // keep track of the key index
      const valueIndex = this.valuesArray.push({ content: value }) - 1; // keep track of value index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({ key, value, keyIndex, valueIndex });
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
  get(key: string | number) {
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
    return;
  }

  // returns a boolean establishing whether key exists
  has(key: string | number) {
    return !!this.get(key);
  }

  remove(key: string | number) {
    const { bucketIndex, itemIndex, keyIndex, valueIndex } =
      this.getIndexes(key);

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
    delete this.keysArray[keyIndex!];
    delete this.valuesArray[valueIndex!];
    this.size--;

    return true;
  }

  rehash(newCapacity: number) {
    // creates a new HashTable, double the previous capacity
    const newMap = new HashTable(newCapacity);

    // for each key in keys, adds key/value pair
    this.keysArray.forEach((key) => {
      if (key && this.get(key.content) !== undefined) {
        newMap.set(key.content, this.get(key.content)!);
      }
    });

    // update buckets, collisions, and keys
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    this.keysArray = newMap.keysArray;
    this.valuesArray = newMap.valuesArray;
  }

  getLoadFactor() {
    return this.size / this.buckets.length;
  }

  keys() {
    return this.keysArray;
  }

  values() {
    return this.valuesArray;
  }

  clear() {
    this.buckets = new Array(16);
    this.loadFactor = 0.75;
    this.size = 0;
    this.collisions = 0;
    this.keysArray = [];
    this.valuesArray = [];
  }
}
