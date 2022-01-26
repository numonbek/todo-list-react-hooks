import React, { useState, useEffect } from 'react';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />
      <button>Сохранить</button>
    </form>
  );
};

export default ToDoForm;
