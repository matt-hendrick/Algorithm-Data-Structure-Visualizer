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
    if (this.adjacencyList.has(source) && this.adjacencyList.has(destination)) {
      this.adjacencyList.get(source).push(destination);
      this.adjacencyList.get(destination).push(source);
    }
  }

  getNodesAndEdges() {
    if (this.adjacencyList) {
      const nodesArray = [];
      const edgesArray = [];
      this.adjacencyList.forEach((values, key) => {
        nodesArray.push({ id: key, label: key });
        values.forEach((value) => edgesArray.push({ from: key, to: value }));
      });
      return { nodesArray, edgesArray };
    }
  }
}
