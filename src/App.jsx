import { useEffect, useState } from 'react';
import { Todo, HeaderForm } from './components';
import { Container, Header, Section, List } from './components/UI';
import { getNewDate, formatDueDate } from './utils/date';
import { DefaultTodo } from './components/TodoUI';

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [currentTodo, setCurrentTodo] = useState('');
  const [date, setDate] = useState(getNewDate());
  const [priorityValue, setPriorityValue] = useState('none');
  const [needsDate, setNeedsDate] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      title: currentTodo,
      id: Date.now(),
      dueDate: date === '2000-01-01' ? '' : formatDueDate(date),
      priority: priorityValue,
      isDone: false,
      isEditing: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setCurrentTodo('');
    setPriorityValue('none');
    setNeedsDate(false);
  };

  return (
    <Container className="container">
      <Header>
        <h1 className="header__logo logo">React ToDo App</h1>

        <HeaderForm
          {...{
            handleAddTodo,
            currentTodo,
            setCurrentTodo,
            priorityValue,
            setPriorityValue,
            date,
            setDate,
            needsDate,
            setNeedsDate,
            todos,
            setTodos,
          }}
        />
      </Header>

      <Section className="todos">
        <List className="todos__list">
          {todos.length === 0 ? (
            <DefaultTodo {...{ setTodos }} />
          ) : (
            todos.map((todo) => <Todo key={todo.id} {...{ todo, setTodos }} />)
          )}
        </List>
      </Section>
    </Container>
  );
};

export default App;
