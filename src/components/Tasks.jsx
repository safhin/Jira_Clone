import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useTodo } from "../context/TodoContext";
import TaskTab from "./TaskTab";

const Tasks = () => {
  const { todos,loading, error } = useTodo();
  const taskStatus = ["todo", "in-progress", "done"];
  const [isDraging, setIsDragging] = useState(false);
  const handleDragging = (dragging) => setIsDragging(dragging);
  const [tasks, setTasks] = useState(todos);


  const handleUpdatedTask = async(id, status, dragTask, dragOverTask) => {

    const copyTasks = [...tasks];
    const task = tasks.find((item) => item.id === id);
    const index = tasks.indexOf(task);

    if (task.status !== status) {
      const [dragTaskContent] = copyTasks.splice(index, 1);
      copyTasks.splice(dragOverTask.current, 0, dragTaskContent);

      //api call for update status in backend
      await fetch(`http://localhost:3366/api/v1/content/task/${id}/${status}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          draggedItem: task,
          draggingPositionId: dragOverTask.current
        })
      })
      .then(response => {
        if(response.status === 200){
          task.status = status;
          setTasks(copyTasks);
          toast.success(`Your task in ${status}`);
        }
      })
      .catch(error => console.log(error))
    } else {
      const [dragTaskContent] = copyTasks.splice(dragTask.current, 1);
      copyTasks.splice(dragOverTask.current, 0, dragTaskContent);
      setTasks(copyTasks);
    }
  };

  
  return (
    <>
      <ToastContainer className={"justify-end"} />

      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        {
        !loading && !error && todos && todos.length > 0 && (
          <>
            {
              taskStatus.map((status) => (
                <TaskTab
                  key={status}
                  tasks={tasks}
                  title={status}
                  handleDragging={handleDragging}
                  isDraging={isDraging}
                  handleUpdatedTask={handleUpdatedTask}
                />
              ))
              // <div className="flex-shrink-0 w-6"></div>
            }
          </>
        )
      }
      </div>
    </>
  );
};

export default Tasks;
