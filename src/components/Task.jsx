import React from "react";

const Task = ({
  task,
  status,
  handleDragStart,
  handleDragEnd,
  handleDragEnter,
}) => {
  const handleDragLeave = (e) => {
    e.target.classList.remove("mb-10");
  };

  return (
    <div
      className="relative flex flex-col items-start p-4 mt-3 bg-gray-700 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 ease-in-out duration-300 kanban_item"
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
    >
      <h4 className="mt-3 text-base font-semibold text-white">{task.title}</h4>
      <p className="mt-1 text-sm text-current">{task.description}</p>

      <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
        <div className="flex items-center">
          <button className="mt-2 py-1 px-4 shadow-md no-underline rounded-full bg-white text-black font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
