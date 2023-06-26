import { useState, useRef, useEffect } from 'react';

import './Modal.css';

const Modal = ({ addTodo, toggleModal }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  function handleClickModal() {
    toggleModal();
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    addTodo(text);
    setText('');
  };

  // focus sul textarea appena il componente viene montato (quindi all'apertura del modal)
  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <div
      className="modal__container"
      onClick={handleClickModal}
    >
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <textarea
          ref={textareaRef}
          type="text"
          value={text}
          onChange={handleTextChange}
          className="modal__text"
          placeholder="Inserisci voce"
        ></textarea>
        <button
          onClick={handleSave}
          disabled={!text}
          className="modal__btn btn"
        >
          Salva
        </button>
      </div>
    </div>
  );
};

export default Modal;
