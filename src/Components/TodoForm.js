import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Components/TodoForm.css'

const TodoForm = props => {
  const [item, setItem] = useState('');

  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value } );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newitem = {};
    setItem(newitem);
  }
  return ( 
    <Form className="TodoForm">
      <fieldset>
        <Form.Group>
          <div className="titleTodos"> Add To Do Item</div>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control size="sm" id="disabledTextInput" placeholder="Item Details"/>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="disabledSelect">Assigned To</Form.Label>
          <Form.Control size="sm" as="select" id="disabledSelect" placeholder="Assignee Name"/>
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Range</Form.Label>
          <Form.Control size="sm" type="range" />
        </Form.Group>
        <Button type="submit">Add Item</Button>
      </fieldset>
    </Form>
    );
  }

export default TodoForm;