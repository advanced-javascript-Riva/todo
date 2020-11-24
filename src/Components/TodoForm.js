import React from 'react';
import Form from 'react-bootstrap/Form';

const TodoForm = props => {

  
    this.state = { item: {}};

  handleInputChange = e => {
    this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.props.handleSubmit(this.state.item);
    const item = {};
    this.setState({item});
  }
  
  render() {
    return (
  <Form>
            <fieldset disabled>
    <Form.Group>
      <Form.Label htmlFor="disabledTextInput">Item Details</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="Disabled input" />
    </Form.Group>
    <Form.Group>
      <Form.Label htmlFor="disabledSelect">Assignee Name</Form.Label>
      <Form.Control as="select" id="disabledSelect">
        <option>Disabled select</option>
      </Form.Control>
    </Form.Group>
    <Form>
    <Form.Group controlId="formBasicRange">
    <Form.Label>Range</Form.Label>
    <Form.Control type="range" />
    </Form.Group>
    </Form>
       <Button type="submit">Add Item</Button>
         </fieldset>
 </Form>
    );
  }
}

export default TodoForm;