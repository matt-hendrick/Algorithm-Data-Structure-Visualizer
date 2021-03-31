export default class Graph {
  constructor(adjacencyList = new Map()) {
    this.adjacencyList = adjacencyList;
  }

  addVertex(value) {
    if (!this.adjacencyList.has(value)) {
      this.adjacencyList.set(value, []);
    }
  }

  addEdge(source, destination) {
    if (!this.adjacencyList.has(source)) {
      this.addVertex(source);
    }
    if (!this.adjacencyList.has(destination)) {
      this.addVertex(destination);
    }
    this.adjacencyList.get(source).push(destination);
    this.adjacencyList.get(destination).push(source);
  }

  removeVertex(vertex) {
    while (
      this.adjacencyList.has(vertex) &&
      this.adjacencyList.get(vertex).length > 0
    ) {
      const adjacentVertex = this.adjacencyList.get(vertex).pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList.delete(vertex);
  }

  removeEdge(source, destination) {
    if (this.adjacencyList.has(source)) {
      this.adjacencyList.set(
        source,
        this.adjacencyList
          .get(source)
          .filter((vertex) => vertex !== destination)
      );
    }
    if (this.adjacencyList.has(destination)) {
      this.adjacencyList.set(
        destination,
        this.adjacencyList
          .get(destination)
          .filter((vertex) => vertex !== source)
      );
    }
  }

  // creates Viz.js friendly nodesArray and edgesArray
  getNodesAndEdges() {
    if (this.adjacencyList.size > 0) {
      const nodesArray = [];
      const edgesArray = [];
      this.adjacencyList.forEach((values, key) => {
        // spaces added around the label ensure center alignment
        nodesArray.push({ id: key, label: ` ${key} ` });
        values.forEach((value) => edgesArray.push({ from: key, to: value }));
      });
      return { nodesArray, edgesArray };
    }
  }

  clear() {
    this.adjacencyList = new Map();
  }
}
