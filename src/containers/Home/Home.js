import React from 'react';

// Components
import HomeCard from '../../components/HomeCard/HomeCard';

// Images
import BinaryTreeImage from '../../images/BinaryTreeImage.png';
import LinkedListImage from '../../images/LinkedListImage.png';
import StackImage from '../../images/StackImage.png';
import QueueImage from '../../images/QueueImage.png';
import QuicksortGif from '../../images/QuicksortGif.gif';

function Home() {
  return (
    <div style={{ display: 'flex', textAlign: 'center' }}>
      <div style={{ width: '50%', padding: '5px' }}>
        <h4
          style={{
            backgroundColor: '#1aab8a',
            color: '#fff',
            width: '75%',
            height: '13%',
            margin: 'auto',
            fontSize: '1em',
          }}
        >
          Algorithm Visualizer Links
        </h4>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignContent: 'space-around',
            height: '40vh',
          }}
        >
          <HomeCard
            link="/sorting"
            header="Sorting Algorithm Visualizer"
            image={QuicksortGif}
          />
        </div>
      </div>

      <div style={{ width: '50%', padding: '5px' }}>
        <h4
          style={{
            backgroundColor: '#1aab8a',
            color: '#fff',
            width: '75%',
            height: '13%',
            margin: 'auto',
            fontSize: '1em',
          }}
        >
          Data Structure Visualizer Links
        </h4>
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
          <HomeCard
            link="/linkedlist"
            header="Linked List Visualizer"
            image={LinkedListImage}
          />
          <HomeCard
            link="/stack"
            header="Stack Visualizer"
            image={StackImage}
          />
          <HomeCard
            link="/queue"
            header="Queue Visualizer"
            image={QueueImage}
          />
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
