import React, { useContext, useEffect, useState } from "react";

const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState(true);
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
