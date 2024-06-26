import React, { useEffect, useState } from "react";

const Demo = () => {
  const [posts, setPosts] = useState([]);
  const [postindex, setPostIndex] = useState(3);

  function userAction(action, payload) {
    switch (action.type) {
      case "CHANGE-INDEX":
        console.log("log", action.number);
        if (postindex === 0) {
          setPostIndex(posts.length);
        } else if (postindex === posts.length + 1) {
          setPostIndex(1);
        } else {
          setPostIndex(action.number);
        }

        break;

      default:
        break;
    }
  }
  useEffect(() => {
    fetch(`http://localhost:3001/posts`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  const changePostIndex = (number) => {
    userAction({ type: "CHANGE-INDEX", number });
  };
  console.log(posts[postindex] !== undefined ? posts[postindex] : "nothig");
  return (
    <div>
      <input
        value={postindex}
        type="number"
        onChange={(e) => changePostIndex(parseInt(e.target.value))}
      />

      {posts[postindex - 1] !== undefined ? (
        <>
          <h1>{posts[postindex - 1].title}</h1>
        </>
      ) : (
        <h1>there is no posts wuth {postindex - 1} id</h1>
      )}

      {/* {posts.length == 0 ? (
        <>
          <h1>nothing</h1>
        </>
      ) : (
        <>
          <h1>{posts[postId].body}</h1>
        </>
      )} */}
      {/* {posts ? (
        <>
          <h1>{posts.title}</h1>
        </>
      ) : (
        <>
          <h1>nothing</h1>
        </>
      )} */}
    </div>
  );
};

export default Demo;

// import { current } from "@reduxjs/toolkit";
// import React, { useEffect, useRef, useState } from "react";
// import Loading from "./components/loading/Loading";
// import Toast from "./components/toast/Toast";

// const Demo = () => {
//   const [count, setCount] = useState(0);
//   const [toast, setToast] = useState({ type: "info", message: "" });
//   const countRef = useRef();
//   useEffect(() => {
//     countRef.current = count;
//     setTimeout(() => {
//       console.log(countRef.current);
//     }, 1500);
//   });

//   return (
//     <div>
//       <h1>{count}</h1>
//       <h1>{countRef.current}</h1>
//       <button onClick={() => setCount(count + 1)}>plus</button>
//       <Loading />
//       <Toast type={toast.type} message={toast.message} />
//       <button
//         onClick={() => setToast({ type: "success", message: "success Toast" })}
//       >
//         Toast
//       </button>
//       <button
//         onClick={() => setToast({ type: "error", message: "error Toast" })}
//       >
//         Toast
//       </button>
//     </div>
//   );
// };

// export default Demo;
// import React, { useEffect, useState } from "react";

// const Demo = () => {
//   const [count, setCount] = useState(0);

//   let plus = () => {
//     setTimeout(() => {
//       setCount((prevState) => {
//         return prevState + 1;
//       });
//     }, 1500);
//   };
//   let minus = () => {
//     setTimeout(() => {
//       setCount((prevState) => {
//         return prevState - 1;
//       });
//     }, 1500);
//   };
//   return (
//     <div className=" d-flex ">
//       <button onClick={() => plus()} className="btn btn-sm btn-secondary ">
//         +
//       </button>
//       <h1 className="m-1">{count}</h1>
//       <button onClick={() => minus()} className="btn btn-sm btn-secondary ">
//         -
//       </button>
//     </div>
//   );
// };

// export default Demo;
