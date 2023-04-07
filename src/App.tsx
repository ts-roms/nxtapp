import React, { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="rounded-l-md border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button
          className="px-4 rounded-r-md border border-gray-200 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-8">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            <span>{task}</span>
            <button
              className="ml-2 px-2 py-1 rounded-md border border-gray-200 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
