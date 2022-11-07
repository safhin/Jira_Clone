import React, { useContext, useEffect, useState } from "react";
import { tasksData } from "../mock/Data";


const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState(tasksData);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const json = await response.json();
        setTodos(json);
        setLoading(false);
      } catch (error) {
        setError("Something wrong happend");
        setLoading(false);
      }
    };
    fetchTodo();
  }, []);

  const value = {
    todos,
    loading,
  };

  return (
    <TodoContext.Provider value={value}>
      {!loading && children}
    </TodoContext.Provider>
  );
}
