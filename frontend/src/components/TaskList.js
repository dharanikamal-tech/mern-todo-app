import React from "react";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className={task.completed ? "done" : ""}>
          <span onClick={() => toggleTask(task._id, !task.completed)}>
            {task.title}
          </span>
          <button onClick={() => deleteTask(task._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
