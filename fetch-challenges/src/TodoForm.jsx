// TodoForm.jsx

import { useState } from 'react';
import './TodoList.scss'

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form" >
      <input
        type='text'
        placeholder='Add a new task...'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default TodoForm;
