export const updateTodo = (setTodos, id, updatedTodo) => {
  setTodos((prev) => prev.map((item) => (item.id === id ? updatedTodo : item)));
};

export const handleDeleteClick = (todo, setTodos) => {
  setTodos((prev) => prev.filter((item) => item.id !== todo.id));
};

export const handleEditClick = (todo, setTodos) => {
  updateTodo(setTodos, todo.id, { ...todo, isEditing: !todo.isEditing });
};

export const handleTitleChange = (e, todo, setTodos) => {
  updateTodo(setTodos, todo.id, { ...todo, title: e.target.value });
};

export const handleSaveClick = (setTitle, todo, setTodos) => {
  setTitle(todo.title);
  updateTodo(setTodos, todo.id, { ...todo, isEditing: !todo.isEditing });
};

export const handleCancelClick = (title, todo, setTodos) => {
  updateTodo(setTodos, todo.id, {
    ...todo,
    isEditing: !todo.isEditing,
    title: title,
  });
};

export const handleCheckboxClick = (todo, setTodos) => {
  updateTodo(setTodos, todo.id, { ...todo, isDone: !todo.isDone });
};
