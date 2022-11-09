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
      const response = await fetch(
        "http://localhost:3366/api/v1/content/allTask"
      );
      if(response.status === 200){
        const json = await response.json();
        setTodos(json);
        setLoading(false);
      }else{
        setError(true)
        setLoading(false)
      }
    };
    fetchTodo();
  }, []);

  const value = {
    todos,
    error,
    loading
  };

  return (
    <TodoContext.Provider value={value}>
      {!loading && children}
    </TodoContext.Provider>
  );
}
