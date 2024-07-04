import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true);

  const addTask = (text, summary) => {
    const newTasks = [...tasks, { text, summary, isCompleted: false }];
    setTasks(newTasks);
  };

  const toggleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index, newText, newSummary) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    newTasks[index].summary = newSummary;
    setTasks(newTasks);
  };

  const toggleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <button onClick={toggleShowTasks} className="toggle-button">
        {showTasks ? 'Hide Tasks' : 'Show Tasks'}
      </button>
      {showTasks && (
        <TaskList
          tasks={tasks}
          toggleCompleteTask={toggleCompleteTask}
          removeTask={removeTask}
          editTask={editTask}
        />
      )}
    </div>
  );
}

export default App;