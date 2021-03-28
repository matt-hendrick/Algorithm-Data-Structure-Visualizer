import GraphNode from '../GraphNode/GraphNode';
import HashTable from '../HashTable/HashTable';

export default class Graph {
  constructor(nodes, edgeDirection = 'directed') {
    this.nodes = nodes ? nodes : new HashTable();
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
      Array.from(this.nodes.values()).forEach((node) =>
        node.removeAdjacent(current)
      );
    }
    return this.nodes.delete(value);
  }

  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDiretion === 'undirected') {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);

      if (this.edgeDiretion === 'undirected') {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }

  areAdjacents(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      return sourceNode.isAdjacent(destinationNode);
    }

    return false;
  }
}
