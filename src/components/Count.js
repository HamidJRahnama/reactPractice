import React, { useEffect, useState } from "react";

const Count = () => {
  const [Count, setCount] = useState(0);

  useEffect(() => {
    document.title = `click ${Count}`;
  });

  return (
    <div>
      <button onClick={() => setCount(Count + 1)}>Click</button>
    </div>
  );
};

export default Count;
