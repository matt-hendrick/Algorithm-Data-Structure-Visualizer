export default class Graph {
  adjacencyList: Map<string | number, Array<string | number>>;

  constructor(
    adjacencyList = new Map() as Map<string | number, Array<string | number>>
  ) {
    this.adjacencyList = adjacencyList;
  }

  addVertex(value: string | number) {
    if (!this.adjacencyList.has(value)) {
      this.adjacencyList.set(value, []);
    }
  }

  addEdge(source: string | number, destination: string | number) {
    if (!this.adjacencyList.has(source)) {
      this.addVertex(source);
    }
    if (!this.adjacencyList.has(destination)) {
      this.addVertex(destination);
    }
    this.adjacencyList.get(source)!.push(destination);
    this.adjacencyList.get(destination)!.push(source);
  }

  removeVertex(vertex: string | number) {
    while (
      this.adjacencyList.get(vertex) &&
      this.adjacencyList.get(vertex)!.length > 0
    ) {
      const adjacentVertex = this.adjacencyList.get(vertex)!.pop();
      this.removeEdge(vertex, adjacentVertex!);
    }
    this.adjacencyList.delete(vertex);
  }

  removeEdge(source: string | number, destination: string | number) {
    if (this.adjacencyList.has(source)) {
      this.adjacencyList.set(
        source,
        this.adjacencyList
          .get(source)!
          .filter((vertex) => vertex !== destination)
      );
    }
    if (this.adjacencyList.has(destination)) {
      this.adjacencyList.set(
        destination,
        this.adjacencyList
          .get(destination)!
          .filter((vertex) => vertex !== source)
      );
    }
  }

  // creates Viz.js friendly nodesArray and edgesArray
  getNodesAndEdges() {
    if (this.adjacencyList.size > 0) {
      const nodesArray: { id: string | number; label: string }[] = [];
      const edgesArray: { from: string | number; to: string | number }[] = [];
      this.adjacencyList.forEach((values, key) => {
        // spaces added around the label ensure center alignment
        nodesArray.push({ id: key, label: ` ${key} ` });
        values.forEach((value) => edgesArray.push({ from: key, to: value }));
      });
      return { nodesArray, edgesArray };
    }
    return;
  }

  clear() {
    this.adjacencyList = new Map();
  }
}
