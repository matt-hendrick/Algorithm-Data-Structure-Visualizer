import React from 'react';

import * as classes from './Home.module.css';

// Components
import HomeCard from '../../components/HomeCard/HomeCard';

// Images
import BinaryTreeImage from '../../images/BinaryTreeImage.png';
import LinkedListImage from '../../images/LinkedListImage.png';
import StackImage from '../../images/StackImage.png';
import QueueImage from '../../images/QueueImage.png';
import HeapImage from '../../images/HeapImage.png';
import HashTableImage from '../../images/HashTableImage.png';
import GraphImage from '../../images/GraphImage.png';
import QuicksortGif from '../../images/QuicksortGif.gif';

function Home() {
  return (
    <div className={classes.HomeFlexContainer}>
      <div className={classes.HomeAlgoDSBox}>
        <h4 className={classes.HomeHeader}>Algorithm Visualizer Links</h4>
        <div className={classes.HomeCardWrapper}>
          <HomeCard
            link="/sorting"
            header="Sorting Algorithms Visualizer"
            image={QuicksortGif}
          />
        </div>
      </div>

      <div className={classes.HomeAlgoDSBox}>
        <h4 className={classes.HomeHeader}>Data Structure Visualizer Links</h4>
        <div className={classes.HomeCardWrapper}>
          <HomeCard link="/heap" header="Heap Visualizer" image={HeapImage} />
          <HomeCard
            link="/hashtable"
            header="Hash Table Visualizer"
            image={HashTableImage}
          />
          <HomeCard
            link="/graph"
            header="Graph Visualizer"
            image={GraphImage}
          />
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
