import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  add,
  remove,
  toggleEdit,
  toggleDone,
  apllyEdit,
  clear,
} from "./Slices/todoSlice";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const todosReducer = useSelector((store) => store.todoSlice);

  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");

  let addTodo = (text) => {
    dispatch(add({ text }));
    setText("");
  };
  let deleteTodo = (id) => {
    dispatch(remove({ id }));
  };

  let editTodo = (id, status) => {
    if (status === true) {
      setEditText(todosReducer.todos.find((todo) => todo.id === id).text);
      dispatch(toggleEdit({ id }));
    } else {
      dispatch(toggleEdit({ id }));
      // setText("");
    }
    console.log(text);
  };
  let doneTodo = (id) => {
    dispatch(toggleDone({ id }));
    console.log(todosReducer);
  };

  let apllyEditTodo = (id, text) => {
    dispatch(apllyEdit({ id, text }));
    // dispatch(toggleEdit({ id }));
  };
  let clearTodo = () => {
    dispatch(clear());

    setText("");
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => e.preventDefault(setText(e.target.value))}
      />
      <button disabled={text ? false : true} onClick={() => addTodo(text)}>
        Add
      </button>
      <button onClick={() => clearTodo()}>clear</button>
      <table className="table table-bordered table-hover table-striped ">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Options</th>
          </tr>
        </thead>
        {todosReducer.todos.length > 0 ? (
          <>
            {todosReducer.todos.map((todo, index) => (
              <tbody key={index}>
                {todo.isEdit ? (
                  <tr key={index} className="table-info ">
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) =>
                          e.preventDefault(setEditText(e.target.value))
                        }
                      />
                    </td>
                    <td>
                      <span>
                        <button
                          onClick={() => editTodo(todo.id, false)}
                          className="btn btn-sm btn-danger"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => apllyEditTodo(todo.id, editText)}
                          className="btn btn-sm btn-success "
                        >
                          Apply
                        </button>
                      </span>
                    </td>
                  </tr>
                ) : (
                  <tr className={todo.isDone ? "table-dark " : ""}>
                    <td>{index + 1}</td>
                    <td>{todo.text}</td>
                    <td>
                      <span>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                        <button
                          disabled={todo.isDone ? true : false}
                          onClick={() => editTodo(todo.id, true)}
                          className="btn btn-sm btn-secondary "
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => doneTodo(todo.id)}
                          className="btn btn-sm btn-success"
                        >
                          {todo.isDone ? "Undone" : "Done"}
                        </button>
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            ))}
          </>
        ) : (
          <tbody>
            <tr>
              <td colSpan={3}>Notiung</td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
};

export default TodoRedux;
