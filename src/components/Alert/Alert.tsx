import { useState, useEffect } from 'react';

import Alert from 'react-bootstrap/Alert';

function MyAlert() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Stack Overflow!</Alert.Heading>
      <p>The stack has reached the maximum number of nodes!</p>
    </Alert>
  );
}

export default MyAlert;
