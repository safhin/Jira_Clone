import React, { useContext, useEffect, useState } from "react";
import { tasksData } from "../mock/Data";
const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  //if api availabel use this function
  // useEffect(() => {
  //   const fetchTodo = async () => {
  //     await fetch(`${api.baseURL}/content/allTask`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           setError(true);
  //           setLoading(false);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setTodos(data);
  //         setError(false);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(true);
  //         setLoading(false);
  //       });
  //   };
  //   fetchTodo();
  // }, []);

  //this is mock data
  useEffect(() => {
    setTodos(tasksData);
    setLoading(false);
    setError(false);
  }, []);

  const value = {
    todos,
    error,
    loading,
  };

  return (
    <TodoContext.Provider value={value}>
      {!loading && children}
    </TodoContext.Provider>
  );
}
