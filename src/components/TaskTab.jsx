import React, { useRef } from "react";
import TabHeader from "./TabHeader";
import Task from "./Task";

const TaskTab = ({
  title,
  tasks,
  handleDragging,
  isDraging,
  handleUpdatedTask,
}) => {

  const dragTask = useRef();
  const dragOverTask = useRef();

  const handleDragOver = (e) => {
    e.target.classList.add("mb-10");
    e.preventDefault();
  };

  const handleDragDrop = (e) => {
    e.preventDefault();
    const id = +e.dataTransfer.getData("text");
    e.target.classList.remove("mb-10");
    handleUpdatedTask(id, title, dragTask, dragOverTask);
    handleDragging(false);
  };

  const handleDragStart = (e, position, task) => {
    e.dataTransfer.setData("text", task.id);
    dragTask.current = position;
    handleDragging(true);
  };

  const handleDragEnd = (e) => {
    handleDragging(false);
  };

  const handleDragEnter = (e, position) => {
    dragOverTask.current = position;
  };

  return (
    <div className="flex flex-col w-1/3 ">
      <TabHeader totalTasks={5} title={title} />
      <div
        className="flex flex-col pb-2 overflow-auto h-screen kanban_container bg-gray-800 p-4 rounded"
        onDrop={handleDragDrop}
        onDragOver={handleDragOver}
      >
        {
        tasks && tasks.map(
          (task, index) =>
            task.status === title && (
              <Task
                task={task}
                key={task.id}
                index={index}
                status={title}
                handleDragging={handleDragging}
                handleDragStart={(e) => handleDragStart(e, index, task)}
                handleDragEnd={handleDragEnd}
                handleDragEnter={(e) => handleDragEnter(e, index)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TaskTab;
