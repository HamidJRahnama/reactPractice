import React, { useContext } from "react";
import BookInfo from "./BookInfo";
import MainContext from "../../context/mainContext";

const BookList = () => {
  const [data, setData] = useContext(MainContext);

  const deleteBook = (id) => {
    let newData = data.books.filter((book) => book.id !== id);
    setData((prevState) => {
      return {
        ...prevState,
        books: newData,
      };
    });
  };

  const toggleBook = (id) => {
    const newItem = data.books.map((book) => {
      return book.id === id ? { ...book, isDone: !book.isDone } : book;
    });

    setData({ ...data, books: [...newItem] });
  };

  const book = data.books.map((book) => (
    <BookInfo
      key={book.id}
      id={book.id}
      title={book.title}
      isDone={book.isDone}
      handelDelete={(id) => deleteBook(id)}
      handelDone={(id) => toggleBook(id)}
    />
  ));
  return (
    <>
      <h1>Books</h1>
      <hr />
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{book}</tbody>
      </table>
    </>
  );
};

export default BookList;
