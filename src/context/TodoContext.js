import React, { useContext, useEffect, useState } from "react";

const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      await fetch("http://localhost:9000/api/v1/content/allTask")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTodos(data);
          setError(false);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          setLoading(false);
        });
    };
    fetchTodo();
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
