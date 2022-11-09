import React, { useContext, useEffect, useState } from "react";
import api from '../apiUrl.json';

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
      await fetch(`${api.baseURL}/content/allTask`)
        .then((response) => {
          if(!response.ok){
            setError(true);
            setLoading(false);
          }
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
