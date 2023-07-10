import React from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-blue-500 text-white px-2 my-4">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <div>
        <button
          className="bg-red-200 p-2"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          delete
        </button>
        <button className="bg-red-200 p-2">
          <Link to={`/tasks/${task._id}`}>edit</Link>
        </button>
      </div>
      <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default TaskCard;
