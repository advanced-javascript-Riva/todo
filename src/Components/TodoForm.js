import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Components/TodoForm.css'
import useForm from '../useFormHook';
const TodoForm = () => {

    const { values, handleChange, handleSubmit } = useForm();

  return ( 
    <Form className="TodoForm" onSubmit={handleSubmit}>
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