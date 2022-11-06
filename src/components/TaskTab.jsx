import React from "react";
import { useTodo } from "../context/TodoContext";
import TabHeader from "./TabHeader";
import Task from "./Task";

const TaskTab = ({ title }) => {
  const { todos, loading } = useTodo();

  console.log(todos);
  return (
    <div className="flex flex-col w-1/3">
      <TabHeader totalTasks={5} title={title} />
      <div className="flex flex-col pb-2 overflow-auto">
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default TaskTab;
