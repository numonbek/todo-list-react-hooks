import React, { useState, useEffect } from 'react';
import './App.css';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState([]);
  console.log('todos', todos);
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => (todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo })),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} toggleTask={handleToggle} removeTask={removeTask} />;
      })}
    </div>
  );
}

export default App;
