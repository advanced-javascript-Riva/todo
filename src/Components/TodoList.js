import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from 'react-bootstrap/ListGroup';
import '../Components/TodoList.css';

const TodoList = () => {

    return (
      <ListGroup className="listGroup">
          <ListGroup.Item variant="success">Clean the bedroom</ListGroup.Item>
          <ListGroup.Item variant="success">Do the laundry and fold it</ListGroup.Item>
          <ListGroup.Item variant="danger">Play with the cat</ListGroup.Item>
         <ListGroup.Item variant="success">Call the electric companu</ListGroup.Item>
      </ListGroup>
    );
  }


export default TodoList;