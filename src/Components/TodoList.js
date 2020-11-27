import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Components/TodoList.css';

// List is controlled by todoConnected
const TodoList = props => {
  const todoItems = props.list.map(item => {
    const variant = item.completed ? 'success' : 'danger';
    return (
      // Creating listGroup.item for each item in the Todo list
      <div className="listItem" key={ item._id } variant={ variant }> 
        <div className="itemAssignee">
          {item.assignee}
        </div>
        <div className="itemDescription">
          { item.description }
        </div>
      </div>
    )
  })
    return (
      <div className="listGroup">
          {todoItems}
      </div>
    );
}
export default TodoList;