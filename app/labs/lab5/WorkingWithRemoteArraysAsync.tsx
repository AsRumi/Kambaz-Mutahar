"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
import { Todo } from "./client";

export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      if (axios.isAxiosError(error)) setErrorMessage(error.response?.data.message);
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error) {
      if (axios.isAxiosError(error)) setErrorMessage(error.response?.data.message);
    }
  };
  useEffect(() => {
    client.fetchTodos().then(setTodos);
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4 className="flex items-center gap-2">
        Todos
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo" className="cursor-pointer text-green-600" />
        <FaPlusCircle onClick={postNewTodo} id="wd-post-todo" className="cursor-pointer text-blue-600" />
      </h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 border-b py-1">
            <input type="checkbox" checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
            {todo.editing ? (
              <input className="rounded border px-2" value={todo.title}
                onChange={(e) => setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, title: e.target.value } : t)))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") updateTodo({ ...todo, editing: false });
                }} />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            )}
            <FaPencilAlt onClick={() => editTodo(todo)} className="cursor-pointer text-blue-600" />
            <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo" className="cursor-pointer text-red-600" />
            <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo" className="cursor-pointer text-2xl text-red-600" />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
