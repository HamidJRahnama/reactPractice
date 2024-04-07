import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AxiosSamp from "./components/axios/AxiosSamp";

// import Posts from "./components/posts/Posts";

// fetch('https://my-json-server.typicode.com/HamidJRahnama/myApi/todos')
//       .then(response => response.json())
//       .then(data => console.log(json))

import HomePage from "./Blog/pages/HomePage/HomePage";
import BlogPage from "./Blog/pages/BlogPage/BlogPage";
import BlogLayout from "./Blog/layout/BlogLayout";
export const App = () => {
  return (
    <div>
      {/* <BlogLayout /> */}
      {/* <HomePage /> */}
      <BlogPage />
    </div>
  );
};

// export const App = () => {
//   return (
//     <div>
//       <AxiosSamp />
//     </div>
//   );
// };

// import Demo from "./Demo";
// import SignUp from "./components/signUpIn/SignUp";
// export const App = () => {
//   return (
//     <div>
//       <Demo />
//       <SignUp />
//     </div>
//   );
// };

// import CocCardsSlider from "./components/CocCardSlider/CocCardsSlider";
// export const App = () => {
//   return (
//     <div className=" justify-content-center">
//       <CocCardsSlider />
//     </div>
//   );
// };

// import Demo from "./Demo";
// import Counter from "./components/functionalComponents/counter/Counter";
// export const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// import Clock from "./components/Lidecycle/clock/Clock";
// export const App = () => {
//   return (
//     <div>
//       <Clock />
//     </div>
//   );
// };

// import BlogPosts from "./components/posts/BlogPosts";
// export const App = () => {
//   return (
//     <div>
//       <BlogPosts />
//     </div>
//   );
// };

// import TodoReducer from "./components/todoWithReducer/TodoReducer";
// import TodoRedux from "./components/todoWithRedux/TodoRedux";
// import LifecycleCC from "./components/Lidecycle/classComponent/LifecycleCC";

// export const App = () => {
//   return (
//     <div>
//       <>
//         <div className=" container ">
//           <div className="row">
//             <div className=" col ">
//               <LifecycleCC />
//               <TodoRedux />
//             </div>
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//       <div className=" container ">
//         <div className="row">
//           <div className=" col-6 ">
//             <TodoReducer />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import TodoContext from "./Context/todo";
// import TodoCon from "./components/todoWithCon/TodoCon";
// import Todos from "./components/Todos";

// function App() {
//   const [data, setData] = useState({
//     todos: [
//       { id: 1, text: "read books", isDone: false, isEdit: false },
//       { id: 2, text: "gym", isDone: true, isEdit: false },
//       { id: 3, text: "study", isDone: false, isEdit: false },
//     ],
//     demoData: [
//       { name: "hamid", last: "raha", age: 20 },
//       { name: "reza", last: "rezaee", age: 25 },
//     ],
//   });
//   let handleDelete = (id) => {
//     let temp = data.todos.filter((q) => q.id !== id);
//     setData({ todos: [...temp], demoData: [...data.demoData] });
//   };

//   let handleAdd = (text) => {
//     setData((prevState) => {
//       return {
//         todos: [
//           ...prevState.todos,
//           { id: Date.now(), text, isDone: false, isEdit: false },
//         ],
//         demoData: [...prevState.demoData],
//       };
//     });
//   };

//   let handleToggle = (id) => {
//     let temp = [...data.todos].map((todo) =>
//       todo.id === id ? Object.assign(todo, { isDone: !todo.isDone }) : todo
//     );
//     setData({ todos: temp, demoData: [...data.demoData] });
//   };
//   return (
//     <>
//       <div className=" container ">
//         <div className="row">
//           <div className=" col-6 ">
//             <TodoContext.Provider
//               value={{
//                 todos: data.todos,
//                 handleDelete,
//                 handleAdd,
//                 handleToggle,
//               }}
//             >
//               <TodoCon />
//             </TodoContext.Provider>
//             {data.demoData.map((demo, index) => (
//               <span key={index}>
//                 {demo.name}-{demo.last}-{demo.age}_
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <h1>hamidd</h1>
//     </>
//   );
// }
// function App() {
//   const [data, setData] = useState({
//     todos: [
//       { id: 1, text: "read books", isDone: false, isEdit: false },
//       { id: 2, text: "gym", isDone: true, isEdit: false },
//       { id: 3, text: "study", isDone: false, isEdit: false },
//     ],
//   });
//   const [text, setText] = useState("");

//   let deleteTodo = (id) => {
//     let temp = data.todos.filter((q) => q.id !== id);
//     setData({ todos: [...temp] });
//     // setData((prevState) => {
//     //   return {
//     //     todos: [...temp],
//     //   };
//     // });
//   };
//   let addTodo = () => {
//     setData((prevState) => {
//       return {
//         todos: [
//           ...prevState.todos,
//           { id: Date.now(), text, isDone: false, isEdit: false },
//         ],
//       };
//     });
//     setText("");
//     console.log(data.todos);
//   };
//   let toggleTodo = (id) => {
//     let temp = [...data.todos].map((todo) =>
//       todo.id === id ? Object.assign(todo, { isDone: !todo.isDone }) : todo
//     );
//     setData({ todos: temp });
//   };
//   return (
//     <div className="container">
//       <div className=" row">
//         <div className=" col-6">
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => e.preventDefault(setText(e.target.value))}
//           />
//           <button disabled={text ? false : true} onClick={() => addTodo()}>
//             Add
//           </button>
//           <table className="table table-hover table-bordered table-striped ">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>title</th>
//                 <th>Opsions</th>
//               </tr>
//             </thead>
//             {data.todos.length > 0 ? (
//               <Todos
//                 data={data}
//                 handleDelete={deleteTodo}
//                 toggleDone={toggleTodo}
//               />
//             ) : (
//               <tbody>
//                 <tr>
//                   <td colSpan={3}>
//                     <span>Nothing to do...</span>
//                   </td>
//                 </tr>
//               </tbody>
//             )}
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
