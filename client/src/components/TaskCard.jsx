import React from "react";
import { useTasks } from "../context/TasksContext";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
      <div>
        <button
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          delete
        </button>
        <button>edit</button>
      </div>
    </div>
  );
}

export default TaskCard;
