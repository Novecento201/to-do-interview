import TrashIcon from '../../assets/icons/Bin.svg';
import CheckFalseIcon from '../../assets/icons/Checkbox_Off.svg';
import CheckTrueIcon from '../../assets/icons/Checkbox_On.svg';

import './TodoItem.css';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <div className="todo__item">
      <div className="todo__icons">
        <button
          onClick={handleDelete}
          className="trash__icon icon"
        >
          <img
            src={TrashIcon}
            alt="Trash icon for deleting a todo"
          />
        </button>
        <button
          onClick={handleToggle}
          className="check__icon icon"
        >
          <img
            src={todo.completed ? CheckTrueIcon : CheckFalseIcon}
            alt="Icona che definisce se il todo è completato o no"
          />
        </button>
      </div>

      <span className={todo.completed ? 'todo__text__completed' : 'todo__text'}>
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
