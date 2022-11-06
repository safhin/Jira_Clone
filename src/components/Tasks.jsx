import React, { useState } from "react";
import { tasksData } from "../mock/Data";
import TaskTab from "./TaskTab";

const Tasks = () => {

  const taskStatus = ['todo','in-progress','done'];
  const[isDraging, setIsDragging] = useState(false);
  const handleDragging = (dragging) => setIsDragging(dragging);
  const[tasks,setTasks] = useState(tasksData);

  const handleUpdatedTask = (id, status) => {

    const task = tasks.find(item => item.id === id);
    
    if(task && task !== status){
      task.status = status;
      setTasks(prevTask => ([
        task,
        ...prevTask.filter(item => item.id !== id)
      ]))
  
    }
    
  }
  return (
    <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
      {
          taskStatus.map((status) =>(
            <TaskTab key={status} tasks={tasks} title={status} handleDragging={handleDragging} isDraging={isDraging}  handleUpdatedTask={handleUpdatedTask} />
          ))
      }
      <div className="flex-shrink-0 w-6"></div>
    </div>
  );
};

export default Tasks;
