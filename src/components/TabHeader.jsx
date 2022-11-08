import React, { useState } from "react";
import { toast } from "react-toastify";

const TabHeader = ({ totalTasks, title }) => {
  
  const [showModal, setShowModal] = useState(false);
  const[titleInput, setTitle] = useState('');
  const[description, setDescription] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch('http://localhost:3366/api/v1/content/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleInput,
        description: description,
        status: 'todo'
      })
    })
    .then(response => {
      console.log(response)
      setShowModal(false)
      toast.success('Task created');
    })
    .catch(error => {
      setShowModal(false)
      console.log(error)
    })
  }

  return (
    <>
      
      <div className="flex items-center flex-shrink-0 h-10 px-2">
        <span className="block text-sm font-semibold">
          {title.toUpperCase()}
        </span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-white bg-white rounded bg-opacity-30">
          {totalTasks}
        </span>
        {title !== "done" && title !== "in-progress" && (
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="flex items-center justify-center w-6 h-6 ml-auto text-gray-400 rounded hover:bg-gray-700 hover:text-indigo-100"
            data-modal-toggle="task-add-modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        )}
      </div>
      {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-96 my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl text-gray-900 font-semibold">
                      Add New Task
                    </h3>
                    <button
                      className="p-1 ml-auto bg-gray-900 border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none flex rounded items-center"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="space-y-6" action="" onSubmit={handleSubmit}>
                      <div>
                        <label
                          htmlFor="title"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Title"
                          required
                          value={titleInput}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Description
                        </label>
                        <textarea
                          name="title"
                          cols="30"
                          rows="3"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-gray-900 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null
      }
    </>
  );
};

export default TabHeader;
