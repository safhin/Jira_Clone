import React from "react";

const Task = ({ task, index, status, handleDragging , handleDragStart, handleDragEnd, handleDragEnter}) => {

  const handleDragLeave = (e) => {
    e.target.classList.remove('mb-10')
  }

  return (
    <div
      className="relative flex flex-col items-start p-4 mt-3 bg-gray-700 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 ease-in-out duration-300 kanban_item"
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
    >
      <h4 className="mt-3 text-base font-semibold text-white">
        {task.title}
      </h4>
      <p className="mt-1 text-sm text-current">
        {task.description}
      </p>
      
      <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
						<div className="flex items-center">
            <button className="mt-2 py-1 px-4 shadow-md no-underline rounded-full bg-white text-black font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">{status}</button>
						</div>
						<div className="relative flex items-center ml-4">
							<svg className="relative w-4 h-4 text-gray-300 fillCurrent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
							</svg>
							<span className="ml-1 leading-none">4</span>
						</div>
					</div>
    </div>
  );


};

export default Task;
