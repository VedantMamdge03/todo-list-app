import React, { useState } from 'react';

function TaskItem({ task, index, toggleCompleteTask, removeTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);
  const [newSummary, setNewSummary] = useState(task.summary);

  const handleEdit = (e) => {
    e.preventDefault();
    editTask(index, newTask, newSummary);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="text"
            value={newSummary}
            onChange={(e) => setNewSummary(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <div className="task-details">
            <span className="task-text" style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}>
              {task.text}
            </span>
            <span className="task-summary">
              {task.summary}
            </span>
          </div>
          <div className="task-buttons">
            <button onClick={() => toggleCompleteTask(index)}>
              <i className={task.isCompleted ? 'fas fa-undo' : 'fas fa-check'}></i>
            </button>
            <button onClick={() => setIsEditing(true)}>
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => removeTask(index)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;