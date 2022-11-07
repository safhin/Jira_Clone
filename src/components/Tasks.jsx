import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { tasksData } from "../mock/Data";
import TaskTab from "./TaskTab";

const Tasks = () => {
  const taskStatus = ["todo", "in-progress", "done"];
  const [isDraging, setIsDragging] = useState(false);
  const handleDragging = (dragging) => setIsDragging(dragging);
  const [tasks, setTasks] = useState(tasksData);

  const handleUpdatedTask = (id, status, dragTask, dragOverTask) => {
    const copyTasks = [...tasks];
    const task = tasks.find((item) => item.id === id);
    const index = tasks.indexOf(task);

    if (task.status !== status) {
      const [dragTaskContent] = copyTasks.splice(index, 1);
      copyTasks.splice(dragOverTask.current, 0, dragTaskContent);
      task.status = status;
      setTasks(copyTasks);
      toast.success(`Your task in ${status}`);
    } else {
      const [dragTaskContent] = copyTasks.splice(dragTask.current, 1);
      copyTasks.splice(dragOverTask.current, 0, dragTaskContent);
      // dragTask.current = null;
      // dragOverTask.current = null;
      console.table(copyTasks);
      setTasks(copyTasks);
    }
  };
  return (
    <>
      <ToastContainer className={"justify-end"} />
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        {taskStatus.map((status) => (
          <TaskTab
            key={status}
            tasks={tasks}
            title={status}
            handleDragging={handleDragging}
            isDraging={isDraging}
            handleUpdatedTask={handleUpdatedTask}
          />
        ))}
        <div className="flex-shrink-0 w-6"></div>
      </div>
    </>
  );
};

export default Tasks;
