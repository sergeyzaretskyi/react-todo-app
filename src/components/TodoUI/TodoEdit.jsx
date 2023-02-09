import { useState } from 'react';
import {
  handleTitleChange,
  handleSaveClick,
  handleCancelClick,
} from '../../utils/todoHelpers';
import { Button, Container, TextArea } from '../UI';

const TodoEdit = ({ todo, setTodos }) => {
  const [title, setTitle] = useState(todo.title);

  return (
    <>
      <Container className="todo__content">
        <TextArea
          className="todo__edit-input"
          value={todo.title}
          onChange={(e) => handleTitleChange(e, todo, setTodos)}
        />
      </Container>

      <Container className="todo__controls">
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
      </Container>
    </>
  );
};

export default TodoEdit;
