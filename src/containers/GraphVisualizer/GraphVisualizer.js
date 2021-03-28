import React, { useState } from 'react';

import * as classes from './GraphVisualizer.module.css';

// Components
import MyButton from '../../components/MyButton/MyButton';

// Data Structures
import MyGraph from '../../dataStructures/Graph/Graph';

// Vis.js
import Graph from 'react-graph-vis';

// uuidv4
import { v4 as uuidv4 } from 'uuid';

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

  let graphInfo = null;

  const graphOptions = {
    layout: {
      improvedLayout: true,
    },
    edges: {
      color: '#39cccc',
    },
    nodes: {
      color: '#1aab8a',
      font: { color: '#ffffff', size: 20 },
      shape: 'circle',
    },
    autoResize: true,
  };

  if (graph) {
    const { edgesArray, nodesArray } = graph.getNodesAndEdges();
    graphInfo = {
      nodes: nodesArray,
      edges: edgesArray,
    };
  }

  return (
    <div>
      <div className={classes.ButtonRow}>
        <input
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
        <input
          onChange={updateSourceNode}
          value={newSourceNode}
          placeholder="Enter the first edge node"
          disabled={graph?.adjacencyList.size < 2}
          size="24"
        />
        <input
          onChange={updateDestinationNode}
          value={newDestinationNode}
          placeholder="Enter the second edge node"
          disabled={graph?.adjacencyList.size < 2}
          size="24"
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
      </div>

      <div style={{ height: '70vh' }}>
        {graph ? (
          <Graph key={uuidv4()} graph={graphInfo} options={graphOptions} />
        ) : null}
      </div>
    </div>
  );
}

export default GraphVisualizer;
