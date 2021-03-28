export default class GraphNode {
  constructor(value) {
    this.value = value;
    this.adjacents = new Set();
  }

  addAdjacent(node) {
    this.adjacents.add(node);
  }

  removeAdjacent(node) {
    return this.adjacents.delete(node);
  }

  isAdjacent(node) {
    return this.adjacents.has(node);
  }

  getAdjacents() {
    return Array.from(this.adjacents);
  }
}
