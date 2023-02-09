import { useState, useEffect } from 'react';
import Sort from './Sort';
import { Input, Button, Select, Form, Container, Label } from './UI';

const HeaderForm = ({
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
}) => {
  const [prevDate, setPrevDate] = useState(date);

  useEffect(() => {
    setDate(needsDate ? prevDate : '2000-01-01');
  }, [needsDate]);

  const handleDateCheckbox = () => {
    setNeedsDate(!needsDate);
  };

  return (
    <Form className="header__form" method="post" onSubmit={handleAddTodo}>
      <Input
        className="header-form__input"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
        type="text"
        placeholder="Enter todo here..."
        required
      />

      <Container className="header__container">
        <Container className="header-form__bot">
          <Select
            className="header-form__select"
            value={priorityValue}
            onChange={(e) => setPriorityValue(e.target.value)}
          >
            <option value="none" disabled hidden>
              Choose priority...
            </option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </Select>
          <Container className="header-form__date">
            <Input
              className="checkbox date-checkbox"
              type="checkbox"
              id="date-picker"
              checked={needsDate}
              onChange={handleDateCheckbox}
            />
            <Label className="date-picker__label" htmlFor="date-picker"></Label>
            <Input
              type="date"
              className="date-picker__input"
              value={date}
              disabled={!needsDate}
              onChange={(e) => setDate(e.target.value)}
            />
          </Container>
          <Button className="btn btn--submit" type="submit">
            Add todo
          </Button>
        </Container>
        <Sort {...{ todos, setTodos }} />
      </Container>
    </Form>
  );
};

export default HeaderForm;
