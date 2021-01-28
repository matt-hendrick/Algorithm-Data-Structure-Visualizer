import React, { Fragment, useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Stack from '../data-structures/Stack';

import Input from '../components/Input/Input';
import RectangularNode from '../components/StackNode/StackNode';

let stack = new Stack();

function StackDisplay() {
  const [userValue, setUserValue] = useState('');
  const [middleStackDisplayArray, setMiddleStackDisplayArray] = useState([]);

  const handleUserValueChange = (event) => {
    const updatedUserValue = event.target.value;
    setUserValue(updatedUserValue);
  };

  const handleAddToStack = (event) => {
    event.preventDefault();
    if (userValue) {
      stack.add(userValue);
      setMiddleStackDisplayArray([userValue, ...middleStackDisplayArray]);
    }
  };

  const handleRemoveFromStack = () => {
    if (stack.size > 0) {
      stack.remove();
      let tempStackArr = [...middleStackDisplayArray];
      tempStackArr.shift();
      setMiddleStackDisplayArray(tempStackArr);
    }
  };

  let stackDisplay = <RectangularNode>Empty Stack</RectangularNode>;

  if (stack.size >= 1)
    stackDisplay = (
      <Fragment>
        {stack.size > 1 ? (
          <RectangularNode>{stack.items.last.value}</RectangularNode>
        ) : null}
        {middleStackDisplayArray.map((item, index) => {
          if (index !== 0 && index !== stack.size - 1) {
            return <RectangularNode key={item}>{item}</RectangularNode>;
          } else return null;
        })}
        <RectangularNode>{stack.items.first.value}</RectangularNode>
      </Fragment>
    );

  return (
    <Container>
      <Row style={{ marginBottom: '10vh' }}>
        <Col>
          <form onSubmit={handleAddToStack} style={{ display: 'flex' }}>
            <Input
              value={userValue}
              onChange={handleUserValueChange}
              placeholder="Value"
            />
            <button>Add to Stack</button>
          </form>
        </Col>
        <Col>
          <button onClick={handleRemoveFromStack}>Remove from Stack</button>
        </Col>
      </Row>
      <Row
        style={{ display: 'flex', height: '65vh', alignContent: 'flex-end' }}
      >
        <Col />
        <Col
          style={
            {
              // alignSelf: 'flex-end'
            }
          }
        >
          {stackDisplay}
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default StackDisplay;
