import React, { useReducer } from "react";
import { initialTodo, todoReducer } from "../todoReducer/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodo);
  const todo = state.map((todo, index) => {
    const deleteTodo = (id) => {
      dispatch({ type: "DELETE-TODO", payload: { id } });
    };
    return (
      <div key={todo.id} className=" d-flex border m-1">
        <span>{index + 1}</span>
        <h3 className="mx-3">{todo.text}</h3>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    );
  });
  console.log(state);
  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <div>{todo}</div>
    </>
  );
};

export default TodoList;
