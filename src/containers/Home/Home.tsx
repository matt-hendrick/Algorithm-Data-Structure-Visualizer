import './Home.css';

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
    <div>
      <h3 className="home-header">
        Click on a Link Below to View an Algorithm or Data Structure Visualizer
      </h3>

      <div className="home-flex-container">
        <div className="home-algo-ds-box">
          <div className="home-card-wrapper">
            <HomeCard
              link="/sorting"
              header="Sorting Algorithms Visualizer"
              image={QuicksortGif}
            />
          </div>
        </div>

        <div className="home-algo-ds-box">
          <div className="home-card-wrapper">
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
    </div>
  );
}

export default Home;
