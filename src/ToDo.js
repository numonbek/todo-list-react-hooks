import React from 'react';

const ToDo = ({ todo, toggleTask, removeTask }) => {
  console.log(todo);
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => toggleTask(todo.id)}>
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </div>
    </div>
  );
};

export default ToDo;
