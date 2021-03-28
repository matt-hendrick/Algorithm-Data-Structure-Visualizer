import GraphNode from '../GraphNode/GraphNode';
import Stack from '../Stack/Stack';
import Queue from '../Queue/Queue';
import HashTable from '../HashTable/HashTable';

class Graph {
  constructor(edgeDirection = 'directed') {
    this.nodes = new HashTable();
    this.edgeDiretion = edgeDirection;
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    }
    const vertex = new GraphNode(value);
    this.nodes.set(value, vertex);
    return vertex;
  }

  removeVertex(value) {
    const current = this.nodes.get(value);
    if (current) {
      Array.from(this.nodes.valueues()).forEach((node) =>
        node.removeAdjacent(current)
      );
    }
  }
}
