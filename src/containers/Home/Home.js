import React from 'react';

// Components
import HomeCard from '../../components/HomeCard/HomeCard';

// Images
import BinaryTreeImage from '../../images/BinaryTreeImage.png';

function Home() {
  return (
    <div style={{ display: 'flex', textAlign: 'center' }}>
      <div style={{ width: '50%', border: '1px solid black', padding: '5px' }}>
        <h3
          style={{
            backgroundColor: '#39cccc',
            color: '#fff',
            width: '50%',
            height: '10%',
            margin: 'auto',
          }}
        >
          Algorithms
        </h3>
        <div
          style={{
            display: 'flex',
            // flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignContent: 'space-around',
            height: '40vh',
          }}
        >
          <HomeCard link="/sorting" header="Sorting Algorithm Visualizer" />
        </div>
      </div>

      <div style={{ width: '50%', border: '1px solid black', padding: '5px' }}>
        <h3
          style={{
            backgroundColor: '#39cccc',
            color: '#fff',
            width: '50%',
            height: '10%',
            margin: 'auto',
          }}
        >
          Data Structures
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignContent: 'space-around',
            height: '40vh',
          }}
        >
          <HomeCard link="/linkedlist" header="Linked List Visualizer" />
          <HomeCard link="/stack" header="Stack Visualizer" />
          <HomeCard link="/queue" header="Queue Visualizer" />
          <HomeCard
            link="/binarytree"
            header="Binary Tree Visualizer"
            image={BinaryTreeImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
