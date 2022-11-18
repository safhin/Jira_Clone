import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import apiURL from "../apiUrl.json";
import TabHeader from "./TabHeader";
import Task from "./Task";

const TaskTab = ({ title, tasks, handleUpdatedTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [titleInput, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updatedTasks, setUpdatedTasks] = useState(tasks);
  const dragTask = useRef();
  const dragOverTask = useRef();

  const handleDragOver = (e) => {
    e.target.classList.add("mb-10");
    e.preventDefault();
  };

  const handleDragStart = (e, position, task) => {
    e.dataTransfer.setData("text", task.id);
    dragTask.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverTask.current = position;
  };

  const handleDragDrop = (e) => {
    e.preventDefault();
    const id = +e.dataTransfer.getData("text");
    console.log(id);
    e.target.classList.remove("mb-10");
    handleUpdatedTask(id, title, dragTask, dragOverTask);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: titleInput,
      description: description,
      status: "todo",
    };

    await fetch(`${apiURL.baseURL}/content/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setUpdatedTasks([...tasks, data]);
        setShowModal(false);
        toast.success("Task created");
      })
      .catch((error) => {
        setShowModal(false);
        console.log(error);
      });
  };

  const handleDelete = async (e, id) => {
    const task = tasks.find((task) => task.id === id);
    const index = tasks.indexOf(task);

    await fetch(`${apiURL.baseURL}/content/task/${id}`, {
      method: "POST",
    })
      .then((response) => {
        if (response.status === 200) {
          tasks.splice(index, 1);
          setUpdatedTasks([...tasks]);
          toast.success("Task deleted");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col w-1/3 ">
      <TabHeader
        title={title}
        handleSubmit={handleSubmit}
        showModal={showModal}
        setShowModal={setShowModal}
        titleInput={titleInput}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
      <div
        className="flex flex-col pb-2 overflow-auto h-screen kanban_container bg-gray-800 p-4 rounded"
        onDrop={handleDragDrop}
        onDragOver={handleDragOver}
      >
        {updatedTasks &&
          updatedTasks.map(
            (task, index) =>
              task.status === title && (
                <Task
                  task={task}
                  key={task.id}
                  status={title}
                  handleDragStart={(e) => handleDragStart(e, index, task)}
                  handleDragEnter={(e) => handleDragEnter(e, index)}
                  handleDelete={(e) => handleDelete(e, task.id)}
                />
              )
          )}
      </div>
    </div>
  );
};

export default TaskTab;
