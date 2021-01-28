import React, { useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Queue from '../data-structures/Queue';

import Input from '../components/Input/Input';
import QueueNode from '../components/QueueNode/QueueNode';

let queue = new Queue();

function QueueDisplay() {
  const [userValue, setUserValue] = useState('');
  const [queueDisplayArray, setQueueDisplayArray] = useState([]);

  const handleUserValueChange = (event) => {
    const updatedUserValue = event.target.value;
    setUserValue(updatedUserValue);
  };

  const handleAddToQueue = (event) => {
    event.preventDefault();
    if (userValue) {
      queue.enqueue(userValue);
      setQueueDisplayArray([userValue, ...queueDisplayArray]);
    }
  };

  const handleRemoveFromQueue = () => {
    if (queue.size > 0) {
      queue.dequeue();
      let tempQueueArr = [...queueDisplayArray];
      tempQueueArr.pop();
      setQueueDisplayArray(tempQueueArr);
    }
  };

  let queueDisplay = <div style={{ textAlign: 'center' }}>Empty Queue</div>;

  if (queue.size >= 1)
    queueDisplay = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          overflow: 'auto',
        }}
      >
        {queue.size > 1 ? (
          <QueueNode>{queue.items.last.value}</QueueNode>
        ) : null}
        {queueDisplayArray.map((item, index) => {
          if (index !== 0 && index !== queue.size - 1) {
            return <QueueNode key={item}>{item}</QueueNode>;
          } else return null;
        })}
        <QueueNode>{queue.items.first.value}</QueueNode>
      </div>
    );

  return (
    <Container>
      <Row style={{ marginBottom: '10vh' }}>
        <Col>
          <form onSubmit={handleAddToQueue} style={{ display: 'flex' }}>
            <Input
              value={userValue}
              onChange={handleUserValueChange}
              placeholder="Value"
            />
            <button>Add to Queue</button>
          </form>
        </Col>
        <Col>
          <button onClick={handleRemoveFromQueue}>Remove from Queue</button>
        </Col>
      </Row>
      <Row>
        <Col xs="1">Begining of the Queue</Col>
        <Col xs="10">{queueDisplay}</Col>
        <Col xs="1">Front of the Queue</Col>
      </Row>
    </Container>
  );
}

export default QueueDisplay;
