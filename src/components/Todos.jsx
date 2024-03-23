import React from "react";

const Todos = (props) => {
  return (
    <>
      {props.data.todos.map((todo, index) => (
        <tbody key={index}>
          <tr className={todo.isDone ? " table-dark" : ""}>
            <td>{index + 1}</td>
            <td>{todo.text}</td>
            <td>
              <div>
                <button
                  className=" btn btn-sm btn-danger "
                  onClick={() => props.handleDelete(todo.id)}
                >
                  Delete
                </button>
                <button
                  className=" btn btn-sm btn-warning "
                  onClick={() => props.toggleDone(todo.id)}
                >
                  {todo.isDone ? "Undone" : "Done"}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default Todos;
