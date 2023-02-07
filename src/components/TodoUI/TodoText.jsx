import { Button, Span, Text } from '../UI';
import { handleDeleteClick, handleEditClick } from '../../utils/todoHelpers';
import { daysLeft } from '../../utils/date';

const TodoText = ({ todo, setTodos }) => {
  return (
    <>
      <Text className={todo.isDone ? 'todo__title done' : 'todo__title'}>
        {todo.title}
      </Text>
      <Text
        className={
          todo.dueDate === '' && todo.priority === 'none'
            ? 'none'
            : 'todo__info'
        }
      >
        <Span className={`todo-info__label todo-info__label--${todo.priority}`}>
          {todo.priority}
        </Span>
        <Span className={todo.dueDate === '' ? 'none' : 'todo-info__date'}>
          {todo.dueDate === '' ? '' : daysLeft(todo.dueDate)}
        </Span>
      </Text>
      <Button
        disabled={todo.isDone}
        className="btn btn--todo-control"
        onClick={() => handleEditClick(todo, setTodos)}
      >
        Edit
      </Button>
      <Button
        className="btn btn--todo-control"
        onClick={() => handleDeleteClick(todo, setTodos)}
      >
        Delete
      </Button>
    </>
  );
};

export default TodoText;
