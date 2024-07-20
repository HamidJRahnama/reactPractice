import React, { useContext, useState } from "react";
import Boxs from "./components/Boxs";

import "./App.css";
import Todo from "./components/Todo";
import GetData from "./components/GetData";
import Count from "./components/Count";
import TodoList from "./components/TodoList";
import MainContext from "./context/mainContext";
import BookList from "./components/bookList/BookList";

export const App = () => {
  const [data, setdata] = useState({
    demoData: "This is demo Data",
    books: [
      { id: 1, title: "Book 1", isDone: false },
      { id: 2, title: "Book 2", isDone: true },
      { id: 3, title: "Book 3", isDone: false },
      { id: 4, title: "Book 4", isDone: true },
      { id: 5, title: "Book 5", isDone: false },
    ],
  });
  const deleteBook = () => {
    console.log("delete^$%##d");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            {data.demoData}
            <MainContext.Provider value={[data, setdata]}>
              <BookList />
            </MainContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
