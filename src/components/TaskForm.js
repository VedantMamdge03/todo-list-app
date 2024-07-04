import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task, summary);
      setTask('');
      setSummary('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
      />
      <input
        type="text"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Summary"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;