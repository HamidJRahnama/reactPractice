import React, { useReducer, useState } from "react";
import { initialReducer, todoReducer } from "./reducer/todoReducer";
// import TodoList from "./TodoList";

const TodoReducer = () => {
  const [text, setText] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialReducer);

  let addTodo = (text) => {
    dispatch({ type: "ADD_TODO", text });
    setText("");
  };
  let deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };
  let editTodo = (id) => {
    dispatch({ type: "EDIT_TODO", id });
  };
  let toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };
  let updateTodo = (id) => {
    dispatch({ type: "UPDATE_TODO", id });
  };
  console.log(state);

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => e.preventDefault(setText(e.target.value))}
      />
      <button disabled={text ? false : true} onClick={() => addTodo(text)}>
        Add
      </button>
      <table className=" table table-bordered table-hover table-striped ">
        <thead>
          <tr disabled>
            <th>#</th>
            <th>Text</th>
            <th>Opsions</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.length > 0 ? (
            <>
              {state.todos.map((todo, index) => (
                <tr className={todo.isDone ? "table-dark " : ""} key={index}>
                  {todo.isEdit ? (
                    <>
                      <td>{index + 1}</td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <span className="">
                          <button
                            onClick={() => deleteTodo(todo.id)}
                            className="btn btn-sm btn-danger "
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => editTodo(todo.id)}
                            className="btn btn-sm btn-warning mx-1 "
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => updateTodo(todo.id)}
                            className="btn btn-sm btn-info "
                          >
                            {/* {todo.isDone ? "Undone" : "done"} */}
                            nothing
                          </button>
                        </span>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{index + 1}</td>
                      <td>{todo.text}</td>
                      <td>
                        <span>
                          <button
                            onClick={() => deleteTodo(todo.id)}
                            className="btn btn-sm btn-danger "
                          >
                            Delete
                          </button>
                          <button
                            disabled={todo.isDone ? true : false}
                            onClick={() => editTodo(todo.id)}
                            className="btn btn-sm btn-warning mx-1"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => toggleTodo(todo.id)}
                            className="btn btn-sm btn-info "
                          >
                            {todo.isDone ? "Undone" : "done"}
                          </button>
                        </span>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </>
          ) : (
            <>
              <tr>
                <td colSpan={3}>
                  <span>Nothing to do ...</span>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TodoReducer;
