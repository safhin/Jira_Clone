import React from "react";
import TaskTab from "./TaskTab";

const Tasks = () => {
  return (
    <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
      <TaskTab title={"Todo"} />
      <TaskTab title={"In Progress"} />
      <TaskTab title={"Done"} />
      <div className="flex-shrink-0 w-6"></div>
    </div>
  );
};

export default Tasks;
