import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleCompleteTask, removeTask, editTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          toggleCompleteTask={toggleCompleteTask}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;