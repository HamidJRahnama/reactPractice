import React, { useEffect, useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  let plus = () => {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 1500);
  };
  let minus = () => {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState - 1;
      });
    }, 1500);
  };
  return (
    <div className=" d-flex ">
      <button onClick={() => plus()} className="btn btn-sm btn-secondary ">
        +
      </button>
      <h1 className="m-1">{count}</h1>
      <button onClick={() => minus()} className="btn btn-sm btn-secondary ">
        -
      </button>
    </div>
  );
};

export default Demo;
