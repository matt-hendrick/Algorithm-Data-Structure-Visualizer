import Graph from './Graph';

describe('Graph tests', () => {
  it('Graph initializes, adds/removes vertices/edges, and clears correctly', () => {
    let testGraph = new Graph();

    expect(testGraph).toEqual({ adjacencyList: new Map() });

    testGraph.addVertex(1);

    expect(testGraph.adjacencyList.has(1)).toEqual(true);

    testGraph.addVertex(2);

    testGraph.addEdge(1, 2);

    expect(testGraph.adjacencyList.has(2)).toEqual(true);
    expect(testGraph.adjacencyList.get(1)).toEqual([2]);

    testGraph.addEdge(2, 3);

    expect(testGraph.adjacencyList.get(2)).toEqual([1, 3]);

    testGraph.addEdge(4, 5);

    expect(testGraph.adjacencyList.get(4)).toEqual([5]);

    testGraph.removeVertex(5);

    expect(testGraph.adjacencyList.has(5)).toEqual(false);
    expect(testGraph.adjacencyList.get(4)).toEqual([]);

    testGraph.removeEdge(2, 3);
    expect(testGraph.adjacencyList.has(2)).toEqual(true);
    expect(testGraph.adjacencyList.has(3)).toEqual(true);
    expect(testGraph.adjacencyList.get(2)).toEqual([1]);
    expect(testGraph.adjacencyList.get(3)).toEqual([]);

    expect(testGraph.getNodesAndEdges()).toEqual({
      edgesArray: [
        { from: 1, to: 2 },
        { from: 2, to: 1 },
      ],
      nodesArray: [
        { id: 1, label: ' 1 ' },
        { id: 2, label: ' 2 ' },
        { id: 3, label: ' 3 ' },
        { id: 4, label: ' 4 ' },
      ],
    });

    testGraph.clear();

    expect(testGraph).toEqual({ adjacencyList: new Map() });
  });
});
