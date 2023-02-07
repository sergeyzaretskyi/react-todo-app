import { TodoText, TodoEdit, TodoCheckbox } from './TodoUI';
import { ListItem } from './UI';

const Todo = ({ todo, setTodos }) => {
  return (
    <ListItem className="todos__item">
      <TodoCheckbox {...{ todo, setTodos }} />

      {todo.isEditing ? (
        <TodoEdit {...{ todo, setTodos }} />
      ) : (
        <TodoText {...{ todo, setTodos }} />
      )}
    </ListItem>
  );
};

export default Todo;
