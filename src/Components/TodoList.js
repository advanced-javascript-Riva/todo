import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Components/TodoList.css';
import Badge from 'react-bootstrap/Badge'
import AxiosHook from '../AxiosHook';

// List is controlled by todoConnected
const TodoList = props => {
  const onDelete = async (item) => {
    // Calling addItem function
    const result = await AxiosHook.deleteItem(item);
    // Will have prop from parent telling the parent(todoConnected) that it needs to refresh the list
    props.refreshList()
  }
  
  const todoItems = props.list.map(item => {
    const variant = item.completed ? 'danger' : 'success';
    const statusText = item.completed ? 'completed' : 'pending'

    return (
      // Creating listGroup.item for each item in the Todo list
      <div className="listItem" key={ item._id } variant={ variant }> 
        <div className="itemAssignee">
          <div className="assigneeLeft">
          <div className="assigneeBadge">
            <Badge variant={ variant }>{ statusText }</Badge>
          </div>
          {item.assignee}
          </div>
          {/* Calling deleteItem method and passing in item I want deleted */}
          <div className="assigneeRight" onClick={ () => onDelete(item) }>
            <b>X</b>
          </div>
        </div>
        <div className="itemDescription">
          { item.description }
        </div>
        <div className="itemDifficulty">
            Difficulty: {item.difficulty}
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