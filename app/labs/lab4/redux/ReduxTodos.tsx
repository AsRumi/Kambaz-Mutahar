import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import type { ReduxTodo } from "./todosReducer";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState("");

  const editTodo = (todo: ReduxTodo) => {
    setTitle(todo.title);
    setEditingId(todo.id);
  };

  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodoForm
        title={title}
        setTitle={setTitle}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem key={todo.id} todo={todo} onEdit={editTodo} />
        ))}
      </ul>
    </div>
  );
}
