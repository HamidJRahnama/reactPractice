import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import Loading from "./components/loading/Loading";
import Toast from "./components/toast/Toast";

const Demo = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  useEffect(() => {
    countRef.current = count;
    setTimeout(() => {
      console.log(countRef.current);
    }, 1500);
  });

  return (
    <div>
      <h1>{count}</h1>
      <h1>{countRef.current}</h1>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <Loading />
      <button onClick={() => <Toast type={"info"} message={"info Toast"} />}>
        Toast
      </button>
    </div>
  );
};

export default Demo;
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
