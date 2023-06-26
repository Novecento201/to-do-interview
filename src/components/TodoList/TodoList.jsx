// components
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="todolist">
      <h1>TODO</h1>

      {todos.length > 0 && (
        <div className="todo__container">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default TodoList;
