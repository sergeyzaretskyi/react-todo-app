import { useState } from 'react';
import {
  handleTitleChange,
  handleSaveClick,
  handleCancelClick,
} from '../../utils/todoHelpers';
import { Button, TextArea } from '../UI';

const TodoEdit = ({ todo, setTodos }) => {
  const [title, setTitle] = useState(todo.title);

  return (
    <>
      <TextArea
        className="todo__edit-input"
        value={todo.title}
        onChange={(e) => handleTitleChange(e, todo, setTodos)}
      />
      <Button
        className="btn btn--todo-control"
        onClick={() => handleSaveClick(setTitle, todo, setTodos)}
      >
        Save
      </Button>
      <Button
        className="btn btn--todo-control"
        onClick={() => handleCancelClick(title, todo, setTodos)}
      >
        Cancel
      </Button>
    </>
  );
};

export default TodoEdit;
