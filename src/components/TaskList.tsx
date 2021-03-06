import { useState } from "react";

import "../styles/tasklist.scss";

import { FiTrash, FiCheckSquare } from "react-icons/fi";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask() {
    // Check if the user has added a task in the input field
    if (!newTaskTitle) {
      return;
    }
    // Create an object to receive the attributes according to the interface
    const userTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };
    // Change the state of Tasks by adding the created object
    setTasks((prevState) => [...prevState, userTask]);
    // Reset input field to empty
    setNewTaskTitle("");
  }

  function handleToggleTaskCompletion(id: number) {
    // Create an array to modify isComplete attr of checked tasks
    const completedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    // Change the state of Tasks by the new Array with Completed tasks
    setTasks(completedTasks);
  }

  function handleRemoveTask(id: number) {
    // Create an array containing only remaining tasks
    const remainingTasks = tasks.filter((task) => task.id !== id);
    // Change the state of Tasks by the new Array with remaining tasks
    setTasks(remainingTasks);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewTask}
          >
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? "completed" : ""}
                data-testid="task"
              >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
