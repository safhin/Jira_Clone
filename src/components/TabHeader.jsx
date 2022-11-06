import React from "react";

const TabHeader = ({ totalTasks, title }) => {
  return (
    <div className="flex items-center flex-shrink-0 h-10 px-2">
      <span className="block text-sm font-semibold">{title}</span>
      <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-white bg-white rounded bg-opacity-30">
        {totalTasks}
      </span>
    </div>
  );
};

export default TabHeader;
