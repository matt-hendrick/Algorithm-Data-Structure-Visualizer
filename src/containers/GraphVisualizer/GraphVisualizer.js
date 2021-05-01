import { useState } from 'react';

import './GraphVisualizer.css';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Input from '../../components/Input/Input';

// Data Structures
import MyGraph from '../../dataStructures/Graph/Graph';

// Vis.js
import Graph from 'react-graph-vis';

function GraphVisualizer() {
  const [newNodeValue, setNewNodeValue] = useState('');
  const [newSourceNode, setNewSourceNode] = useState('');
  const [newDestinationNode, setNewDestinationNode] = useState('');
  const [graph, setGraph] = useState(null);

  const addVertex = () => {
    if (newNodeValue !== '') {
      if (!graph) {
        let tempGraph = new MyGraph();
        tempGraph.addVertex(newNodeValue);
        setGraph(tempGraph);
        setNewNodeValue('');
      } else {
        let tempGraph = new MyGraph(graph.adjacencyList, graph.size);
        tempGraph.addVertex(newNodeValue);
        setNewNodeValue('');
      }
    }
  };

  const addEdge = () => {
    if (newSourceNode !== '' && newDestinationNode !== '') {
      if (!graph) {
        let tempGraph = new MyGraph();
        tempGraph.addEdge(newSourceNode, newDestinationNode);
        setGraph(tempGraph);
        setNewSourceNode('');
        setNewDestinationNode('');
      } else {
        let tempGraph = new MyGraph(graph.adjacencyList, graph.size);
        tempGraph.addEdge(newSourceNode, newDestinationNode);
        setGraph(tempGraph);
        setNewSourceNode('');
        setNewDestinationNode('');
      }
    }
  };

  const removeVertex = () => {
    if (graph && newNodeValue !== '') {
      let tempGraph = new MyGraph(graph.adjacencyList, graph.size);
      tempGraph.removeVertex(newNodeValue);
      setNewNodeValue('');
    }
  };

  const removeEdge = () => {
    if (graph && newSourceNode !== '' && newDestinationNode !== '') {
      let tempGraph = new MyGraph(graph.adjacencyList, graph.size);
      tempGraph.removeEdge(newSourceNode, newDestinationNode);
      setNewSourceNode('');
      setNewDestinationNode('');
    }
  };

  const clearGraph = () => {
    if (graph) {
      setGraph(null);
      setNewNodeValue('');
      setNewSourceNode('');
      setNewDestinationNode('');
    }
  };

  const updateNodeValue = (event) => {
    const updatedValue = event.target.value;
    setNewNodeValue(updatedValue);
  };

  const updateSourceNode = (event) => {
    const updatedValue = event.target.value;
    setNewSourceNode(updatedValue);
  };

  const updateDestinationNode = (event) => {
    const updatedValue = event.target.value;
    setNewDestinationNode(updatedValue);
  };

  // Viz.js 'graph'
  let graphInfo = null;

  // Viz.js 'options'
  const graphOptions = {
    layout: {
      improvedLayout: true,
    },
    edges: {
      color: '#1aab8a',
    },
    nodes: {
      color: '#39cccc',
      font: { color: '#ffffff', size: 20 },
      shape: 'circle',
    },
    autoResize: true,
  };

  if (graph?.adjacencyList.size > 0) {
    // extracts Viz.js friendly nodes and edges array to render Viz.js graph
    const { edgesArray, nodesArray } = graph.getNodesAndEdges();
    graphInfo = {
      nodes: nodesArray,
      edges: edgesArray,
    };
  }

  return (
    <div>
      <div className="button-row">
        <Input
          onChange={updateNodeValue}
          value={newNodeValue}
          placeholder="Enter a new node value"
        />
        <MyButton onClick={addVertex} disabled={!newNodeValue}>
          Add Vertex
        </MyButton>
        <MyButton onClick={removeVertex} disabled={!newNodeValue || !graph}>
          Remove Vertex
        </MyButton>
        <Input
          onChange={updateSourceNode}
          value={newSourceNode}
          placeholder="Enter first connected node"
        />
        <Input
          onChange={updateDestinationNode}
          value={newDestinationNode}
          placeholder="Enter second connected node"
        />
        <MyButton
          onClick={addEdge}
          disabled={!newSourceNode || !newDestinationNode}
        >
          Add Edge Between Nodes
        </MyButton>
        <MyButton
          onClick={removeEdge}
          disabled={!newSourceNode || !newDestinationNode}
        >
          Remove Edge Between Nodes
        </MyButton>
        <MyButton onClick={clearGraph} disabled={!graph}>
          Clear Graph
        </MyButton>
      </div>

      <div className="graph-container">
        {graph?.adjacencyList.size > 0 ? (
          <Graph key={Date.now()} graph={graphInfo} options={graphOptions} />
        ) : (
          <h6 className="enter-node-prompt-margin-top">
            Add a new Node (or two connected Nodes) to visualize a new Graph
          </h6>
        )}
      </div>
    </div>
  );
}

export default GraphVisualizer;
