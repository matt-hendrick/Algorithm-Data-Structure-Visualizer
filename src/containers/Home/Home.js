import React from 'react';

// Components
import HomeCard from '../../components/HomeCard/HomeCard';

function Home() {
  return (
    <div style={{ display: 'flex', textAlign: 'center' }}>
      <div style={{ width: '50%' }}>
        <h3>Algorithms</h3>
        <div
          style={{
            display: 'flex',
            // flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            height: '40vh',
          }}
        >
          <HomeCard link="/sorting" header="Sorting Algorithm Visualizer" />
        </div>
      </div>

      <div style={{ width: '50%' }}>
        <h3>Data Structures</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            height: '40vh',
          }}
        >
          <HomeCard link="/linkedlist" header="Linked List Visualizer" />
          <HomeCard link="/stack" header="Stack Visualizer" />
          <HomeCard link="/queue" header="Queue Visualizer" />
          <HomeCard link="/binarytree" header="Binary Tree Visualizer" />
        </div>
      </div>
    </div>
  );
}

export default Home;
