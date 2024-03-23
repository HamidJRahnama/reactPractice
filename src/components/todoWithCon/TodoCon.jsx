import React, { useContext, useState } from "react";
import TodoContext from "../../Context/todo";

const TodoCon = () => {
  const [text, setText] = useState("");
  const data = useContext(TodoContext);
  return (
    <>
      <input
        value={text}
        onChange={(e) => e.preventDefault(setText(e.target.value))}
        type="text"
      />
      <button
        onClick={() => data.handleAdd(text)}
        className=" btn btn-sm btn-info"
        disabled={text.length < 0 ? true : false}
      >
        Add
      </button>
      <table className="table table-hover table-bordered table-striped ">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Opsion</th>
          </tr>
        </thead>
        <tbody>
          {data.todos.length > 0 ? (
            <>
              {data.todos.map((todo, index) => (
                <tr key={index} className={todo.isDone ? " table-dark" : ""}>
                  <td>{index + 1}</td>
                  <td>{todo.text}</td>
                  <td>
                    <span>
                      <button
                        onClick={() => data.handleDelete(todo.id)}
                        className=" btn btn-sm btn-danger "
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => data.handleToggle(todo.id)}
                        className=" btn btn-sm btn-secondary "
                      >
                        {todo.isDone ? "Undone" : "done"}
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan={3}>nothing</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TodoCon;
