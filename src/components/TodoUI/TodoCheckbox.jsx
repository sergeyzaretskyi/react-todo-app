import { handleCheckboxClick } from '../../utils/todoHelpers';
import { Input, Label } from '../UI';

const TodoCheckbox = ({ todo, setTodos }) => {
  return (
    <>
      <Input
        className="checkbox todo__checkbox"
        type="checkbox"
        id={todo.id}
        checked={todo.isDone}
        onChange={() => handleCheckboxClick(todo, setTodos)}
        disabled={todo.isEditing}
      />
      <Label className="todo__label" htmlFor={todo.id}></Label>
    </>
  );
};

export default TodoCheckbox;
