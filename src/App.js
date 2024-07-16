import React, { useState } from "react";
import Book from "./components/Book";

export const App = () => {
  const [data, setData] = useState({
    books: [
      { id: 1, title: "React" },
      { id: 2, title: "JavaScript" },
      { id: 3, title: "Next js" },
      { id: 4, title: "Java" },
    ],
  });
  let books = data.books.map((book, index) => (
    <Book id={book.id} title={book.title} />
  ));
  return (
    <div>
      <h1 className="bg-danger">hi</h1>

      {books}
      <button className="btn btn-sm btn-danger">Click</button>
    </div>
  );
};

export default App;
