import React from "react";

const BookInfo = ({ id, title, isDone, handelDelete, handelDone }) => {
  return (
    <>
      <tr className={isDone ? "table-dark" : null}>
        <td>{id}</td>
        <td>{title}</td>
        <td>
          <button onClick={() => handelDelete(id)}>Delete</button>
          <button onClick={() => handelDone(id)}>Done</button>
        </td>
      </tr>
    </>
  );
};

export default BookInfo;
