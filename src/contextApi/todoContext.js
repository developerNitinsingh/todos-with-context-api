import { useContext, createContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      desc: "desc",
      completed: false,
    },
  ],

  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleTodo: () => {},
});

export const useTodo = () => {
  return useContext(todoContext);
};

export const TodoProvider = todoContext.Provider;
