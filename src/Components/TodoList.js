import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from 'react-bootstrap/ListGroup';
import '../Components/TodoList.css';

const TodoList = props => {
  const todoItems = props.list.map(item => {
    const variant = item.completed ? 'success' : 'danger';
    return (
      // Creating listGroup.item for each item in the Todo list
      <ListGroup.Item key={ item.id } variant={ variant }> { item.title }</ListGroup.Item>
    )
  })
    return (
      <ListGroup className="listGroup">
          {todoItems}
      </ListGroup>
    );
}
export default TodoList;