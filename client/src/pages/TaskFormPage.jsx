import React from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <div className="text-red-500">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />

        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
        ></textarea>

        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
