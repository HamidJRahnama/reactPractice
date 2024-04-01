import React, { useEffect, useState } from "react";

const Demo = () => {
  const [demo, setDemo] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log(count);
  }, [demo]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setDemo(demo + 1)}>change state</button>
      <p>{count}</p>
    </div>
  );
};

export default Demo;
