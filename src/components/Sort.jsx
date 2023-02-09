import { useEffect, useState } from 'react';
import { Button, Container } from './UI';
import { sortByPriority, sortByDueDate, sortByUrgency } from '../utils/sort';

const Sort = ({ todos, setTodos }) => {
  const [todosToSort, setTodosToSort] = useState(todos);
  const [prioritySortMode, setPrioritySortMode] = useState('desc');
  const [dueDateSortMode, setDueDateSortMode] = useState('desc');
  const [urgencySortMode, setUrgencySortMode] = useState('desc');

  const [isSortButtonToggled, setIsSortButtonToggled] = useState(false);

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

  const handleSortButtonToggle = () => {
    setIsSortButtonToggled(!isSortButtonToggled);
  };

  return (
    <>
      <Container className="header-form__buttons">
        <Button
          type="button"
          className="btn btn--sort"
          onClick={handlePrioritySort}
        >
          Sort by priority
        </Button>
        <Button
          type="button"
          className="btn btn--sort"
          onClick={handleUrgencySort}
        >
          Sort by urgency
        </Button>
        <Button
          type="button"
          className="btn btn--sort"
          onClick={handleDueDateSort}
        >
          Sort by due date
        </Button>
      </Container>

      <Container className="header-form__buttons--mobile">
        {isSortButtonToggled ? (
          <>
            <Button
              type="button"
              className="btn btn--toggle-sort"
              onClick={handleSortButtonToggle}
            >
              Sort by...
            </Button>
            <Button
              type="button"
              className="btn btn--sort"
              onClick={handlePrioritySort}
            >
              Sort by priority
            </Button>
            <Button
              type="button"
              className="btn btn--sort"
              onClick={handleUrgencySort}
            >
              Sort by urgency
            </Button>
            <Button
              type="button"
              className="btn btn--sort"
              onClick={handleDueDateSort}
            >
              Sort by due date
            </Button>
          </>
        ) : (
          <Button
            type="button"
            className="btn btn--toggle-sort"
            onClick={handleSortButtonToggle}
          >
            Sort by...
          </Button>
        )}
      </Container>
    </>
  );
};

export default Sort;
