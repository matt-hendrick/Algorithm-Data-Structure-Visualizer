import React, { useState } from 'react';

import * as classes from './GraphVisualizer.module.css';

// Components
import MyButton from '../../components/MyButton/MyButton';

// Data Structures
import Graph from '../../dataStructures/Graph/Graph';

function GraphVisualizer() {
  const [newNodeValue, setNewNodeValue] = useState('');
  const [newSourceNode, setNewSourceNode] = useState('');
  const [newDestinationNode, setNewDestinationNode] = useState('');
  const [graph, setGraph] = useState(null);

  const addVertex = () => {
    if (newNodeValue !== '') {
      if (!graph) {
        let tempGraph = new Graph();
        tempGraph.addVertex(newNodeValue);
        setGraph(tempGraph);
        setNewNodeValue('');
      } else {
        let tempGraph = new Graph(graph.nodes);
        tempGraph.addVertex(newNodeValue);
        setNewNodeValue('');
      }
    }
  };

  const addEdge = () => {
    if (
      graph?.nodes.size > 1 &&
      newSourceNode !== '' &&
      newDestinationNode !== ''
    ) {
      let tempGraph = new Graph(graph.nodes);
      tempGraph.addEdge(newSourceNode, newDestinationNode);
      setGraph(tempGraph);
      setNewNodeValue('');
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

  if (graph) console.log(graph, graph.nodes.size);

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
        <input
          onChange={updateSourceNode}
          value={newSourceNode}
          placeholder="Enter the first edge node"
          disabled={graph?.nodes.size < 2}
        />
        <input
          onChange={updateDestinationNode}
          value={newDestinationNode}
          placeholder="Enter the Second edge node"
          disabled={graph?.nodes.size < 2}
        />
        <MyButton
          onClick={addEdge}
          disabled={
            graph?.nodes.size < 2 ||
            !graph?.nodes.has(newSourceNode) ||
            !graph?.nodes.has(newDestinationNode)
          }
        >
          Add Edge Between Nodes
        </MyButton>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          height: '100%',
          flexWrap: 'wrap',
        }}
      >
        {graph
          ? graph.nodes.buckets.map((item) =>
              item.map((subitem) => <div>{subitem.key}</div>)
            )
          : null}
      </div>
    </div>
  );
}

export default GraphVisualizer;
