import React from "react";
import { useTodo } from "../context/TodoContext";
import TabHeader from "./TabHeader";
import Task from "./Task";

const TaskTab = ({ title, tasks, handleDragging, isDraging, handleUpdatedTask }) => {
  
  const { todos, loading } = useTodo();

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDragDrop = (e) => {
    e.preventDefault();
    console.log(e.target.closest('.kanban_item'))
    const id = +e.dataTransfer.getData('text');
    handleUpdatedTask(id,title)
    handleDragging(false)
  }

  return (
    <div className="flex flex-col w-1/3 ">
      <TabHeader totalTasks={5} title={title.toUpperCase()} />
      <div 
        className="flex flex-col pb-2 overflow-auto h-screen kanban_container"
        onDrop={handleDragDrop}
        onDragOver={handleDragOver}
        >
        {
          tasks.map(task => (
            task.status === title && <Task task={task} key={task.id} handleDragging={handleDragging}/> 
          ))
        }
      </div>
    </div>
  );
};

export default TaskTab;
