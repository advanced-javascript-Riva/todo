import React  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Components/TodoForm.css'
import useForm from '../useFormHook';
import AxiosHook from '../AxiosHook';

const TodoForm = props => {
  
const onSubmit = async (item) => {
  // Calling addItem function
  const result = await AxiosHook.addItem(item);
  // Will have prop from parent telling the parent(todoConnected) that it needs to refresh the list
  props.refreshList()
}
// Using the useForm hook, passing in the callback that the hook will call when something is submitted
const { item, handleInputChange, handleSubmit } = useForm(onSubmit);

  return ( 
    <Form className="TodoForm" onSubmit={handleSubmit}>
      <fieldset>
        <Form.Group>
          <div className="titleTodos"> Add To Do Item</div>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control name="description" value={item.description} size="sm" id="disabledTextInput" placeholder="Item Details" onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="disabledSelect">Assigned To</Form.Label>
          <Form.Control name="assignee" value={item.assignee} size="sm"  id="disabledSelect" placeholder="Assignee Name" onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Range</Form.Label>
          <Form.Control name="difficulty" value={item.difficulty} size="sm" type="range" onChange={handleInputChange} />
        </Form.Group>
        <Button type="submit">Add Item</Button>
      </fieldset>
    </Form>
  );
}

export default TodoForm;