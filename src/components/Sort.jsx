import { useEffect, useState } from 'react';
import { Button, Container } from './UI';
import { sortByPriority, sortByDueDate, sortByUrgency } from '../utils/sort';

const Sort = ({ todos, setTodos }) => {
  const [todosToSort, setTodosToSort] = useState(todos);
  const [prioritySortMode, setPrioritySortMode] = useState('desc');
  const [dueDateSortMode, setDueDateSortMode] = useState('desc');
  const [urgencySortMode, setUrgencySortMode] = useState('desc');

  useEffect(() => {
    setTodosToSort(todos);
  }, [todos]);

  const handlePrioritySort = () => {
    const sortedTodos = sortByPriority(todosToSort, prioritySortMode);

    setTodos(sortedTodos);
    setPrioritySortMode((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  const handleUrgencySort = () => {
    setTodos(sortByUrgency(todosToSort, urgencySortMode));
    setUrgencySortMode((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  const handleDueDateSort = () => {
    setTodos(sortByDueDate(todosToSort, dueDateSortMode));
    setDueDateSortMode((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  return (
    <Container className="todos__sort-buttons">
      <Button className="btn btn--sort" onClick={handlePrioritySort}>
        Sort by priority
      </Button>
      <Button className="btn btn--sort" onClick={handleUrgencySort}>
        Sort by urgency
      </Button>
      <Button className="btn btn--sort" onClick={handleDueDateSort}>
        Sort by due date
      </Button>
    </Container>
  );
};

export default Sort;
