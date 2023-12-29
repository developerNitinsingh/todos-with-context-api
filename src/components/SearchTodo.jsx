import React, { useState } from "react";
import { useTodo } from "../contextApi";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) {
      return;
    }

    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-100 bg-white/20 py-1.5"
        type="text"
        placeholder="Let's create a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="rounded-r-lg  px-3 py-1 bg-green-600 text-white shrink-0"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
}

export default AddTodo;
