import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
// import apiURL from "../apiUrl.json";
import { useTodo } from "../context/TodoContext";
import TaskTab from "./TaskTab";

const Tasks = () => {
  const { todos, loading, error } = useTodo();
  const taskStatus = ["todo", "in-progress", "done"];
  const [tasks, setTasks] = useState(todos);

  const handleUpdatedTask = async (id, status, dragTask, dragOverTask) => {
    const copyTasks = [...tasks];
    const task = tasks?.find((item) => {
      let task = item.id === id;
      return task;
    });
    console.log(task);
    const index = tasks.indexOf(task);

    if (task.status !== status) {
      const dragTaskContent = copyTasks[dragTask.current];
      copyTasks.splice(index, 1);
      copyTasks.splice(dragOverTask.current, 0, dragTaskContent);
      task.status = status;
      setTasks(copyTasks);
      dragTask.current = null;
      dragOverTask.current = null;

      //api call for update status in backend
      // await fetch(`${apiURL.baseURL}/content/task/${id}/${status}`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     draggedItem: task,
      //     draggingPositionId: dragOverTask.current,
      //   }),
      // })
      //   .then((response) => {
      //     if (response.status === 200) {
      //       task.status = status;
      //       setTasks(copyTasks);
      //       toast.success(`Your task in ${status}`);
      //     }
      //   })
      //   .catch((error) => {
      //     toast.error("Something wrong happened");
      //     console.log(error);
      //   });
    } else {
      // const [dragTaskContent] = copyTasks.splice(dragTask.current, 1);
      // copyTasks.splice(dragOverTask.current, 0, dragTaskContent);
      // setTasks(copyTasks);
    }
  };

  return (
    <>
      <ToastContainer className={"justify-end"} />
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        {!loading && !error && (
          <>
            {taskStatus.map((status) => (
              <TaskTab
                key={status}
                tasks={tasks}
                title={status}
                handleUpdatedTask={handleUpdatedTask}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Tasks;
