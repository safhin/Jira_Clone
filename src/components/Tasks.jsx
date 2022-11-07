import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { tasksData } from "../mock/Data";
import TaskTab from "./TaskTab";

const Tasks = () => {
  const taskStatus = ["todo", "in-progress", "done"];
  const [isDraging, setIsDragging] = useState(false);
  const handleDragging = (dragging) => setIsDragging(dragging);
  const [tasks, setTasks] = useState(tasksData);

<<<<<<< HEAD
  const handleUpdatedTask = (id, status) => {
    const task = tasks.find((item) => item.id === id);

    if (task && task !== status) {
      task.status = status;
      setTasks((prevTask) => [
        ...prevTask.filter((item) => item.id !== id),
        task,
      ]);
=======
  const handleUpdatedTask = (id, status, dragTask, dragOverTask) => {
    const copyTasks = [...tasks];
    const [dragTaskContent] = copyTasks.splice(dragTask.current, 1);
    copyTasks.splice(dragOverTask.current, 0, dragTaskContent);


    const task = tasks.find(item => item.id === id);
    const index = tasks.indexOf(task);
    
    if(task.status !== status){
      task.status = status;
      toast.success(`Your task in ${status}`)
      setTasks(prevTask => ([
        task,
        ...prevTask.filter(item => item.id !== id)
      ]))
    }else{
      dragTask.current = null;
      dragOverTask.current = null
      console.table(copyTasks);
      setTasks(copyTasks);
>>>>>>> caf30b062fde306ae52f0792ca7eadf1cee23ba4
    }
  };
  return (
<<<<<<< HEAD
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
=======
    <>
      <ToastContainer className={'justify-end'}/>
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        {
            taskStatus.map((status) =>(
              <TaskTab key={status} 
                tasks={tasks} 
                title={status} 
                handleDragging={handleDragging} 
                isDraging={isDraging}  
                handleUpdatedTask={handleUpdatedTask} 
              />
            ))
        }
        <div className="flex-shrink-0 w-6"></div>
      </div>
    </>
>>>>>>> caf30b062fde306ae52f0792ca7eadf1cee23ba4
  );
};

export default Tasks;
