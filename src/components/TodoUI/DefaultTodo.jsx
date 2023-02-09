import { Text } from '../UI';
import { boilerplate } from '../../utils/boilerplate';

const DefaultTodo = ({ setTodos }) => {
  const handleImportClick = () => {
    setTodos(boilerplate);
  };

  return (
    <Text style={{ padding: 10 }}>
      You can start adding your todo or{' '}
      <button className="import-test-todos" onClick={handleImportClick}>
        import my
      </button>{' '}
      for a test.
    </Text>
  );
};

export default DefaultTodo;
