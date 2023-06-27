import { useState, useEffect } from 'react';

// components
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';

// icons
import AddIcon from './assets/icons/Adds.svg';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    toggleModal();

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Cambia lo stato completed di un todo
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    // Sposta i todo completati insieme agli altri
    const completedTodos = updatedTodos.filter((todo) => todo.completed);
    const notCompletedTodos = updatedTodos.filter((todo) => !todo.completed);
    const updatedTodosSorted = [...notCompletedTodos, ...completedTodos];

    setTodos(updatedTodosSorted);

    localStorage.setItem('todos', JSON.stringify(updatedTodosSorted));
  };

  // Al primo caricamento di pagina controlla se ci sono "todos" salvati e in caso positivo li prende
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <main className="main">
      <div className="todolist__container">
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      </div>

      <button
        onClick={toggleModal}
        className="add__todo btn"
      >
        <img
          src={AddIcon}
          alt="Plus icon for adding a new to-do activity."
        />
        <span>Nuova voce</span>
      </button>
      {isModalOpen && (
        <Modal
          addTodo={addTodo}
          toggleModal={toggleModal}
        />
      )}
    </main>
  );
}

export default App;
