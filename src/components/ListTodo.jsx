import React, { useState } from "react";
import { useTodo } from "../contextApi";

function ListTodo({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [todoDesc, setTodoDesc] = useState(todo.desc);

  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg, desc: todoDesc });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`flex flex-col border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <div className="flex gap-5">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />

        <input
          type="text"
          className={` outline-none w-full bg-transparent rounded-lg text-lg font-semibold capitalize ${
            isTodoEditable ? "border-black/10 px-2 " : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      <textarea
        name=""
        id=""
        cols="auto"
        rows="auto"
        className={` outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2 " : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoDesc}
        onChange={(e) => setTodoDesc(e.target.value)}
        readOnly={!isTodoEditable}
      ></textarea>
      <div className="flex gap-7 justify-center">
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) {
              return;
            }
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default ListTodo;
