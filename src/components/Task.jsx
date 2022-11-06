import React from "react";

const Task = ({ task, handleDragging }) => {

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text', task.id)
    handleDragging(true)
  }

  const handleDragEnd = (e) => {
    handleDragging(false)
  };

  return (
    <div
      className="relative flex flex-col items-start p-4 mt-3 bg-gray-700 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 ease-in-out duration-300 kanban_item"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      data-position={task.id}
    >
      <h4 className="mt-3 text-base font-semibold text-white">
        {task.title}
      </h4>
      <p className="mt-1 text-sm text-current">
        {task.description}
      </p>
    </div>
  );
};

export default Task;
