import React from 'react';
import Card from '@bit/react-bootstrap.react-bootstrap.card';
const TodoList = () => {

  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Header>Todo Items</Card.Header>
      <ListGroup variant="success">
        <ListGroup.Item>Clean the Bedroom</ListGroup.Item>
        <ListGroup.Item>Do the Laundry and fold it</ListGroup.Item>
        </ListGroup>
        <ListGroup variant="danger">
        <ListGroup.Item>Set aside time to play with cat</ListGroup.Item>
      </ListGroup>
      <ListGroup variant="success">
      <ListGroup.Item>Run to the grocery store</ListGroup.Item>
      </ListGroup>
    </Card>

    );
  }
}

export default TodoList;