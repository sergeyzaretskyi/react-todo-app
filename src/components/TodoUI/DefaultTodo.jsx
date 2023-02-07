import { handleImportClick } from '../../utils/todoHelpers';
import { fetchAPI } from '../../utils/api';
import { Text } from '../UI';

const DefaultTodo = ({ setTodos }) => {
  return (
    <Text style={{ padding: 10 }}>
      You can start adding your todo or{' '}
      <button
        className="import-test-todos"
        onClick={() => handleImportClick(fetchAPI, setTodos)}
      >
        import my
      </button>{' '}
      for a test.
    </Text>
  );
};

export default DefaultTodo;
