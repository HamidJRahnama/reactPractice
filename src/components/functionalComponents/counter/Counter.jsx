import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(3);
  const [step, setStep] = useState(2);

  useEffect(() => {
    document.title = `You clicked ${counter} time`;
    console.log(counter, "useEffect");
  }, [counter]);

  return (
    <div>
      <h3>You clicked {counter} time</h3>
      <input
        onChange={(e) => e.preventDefault(setStep(parseInt(e.target.value)))}
        type="number"
        value={step}
      />
      <button onClick={() => setCounter(counter + step)}>Click</button>
      <h1></h1>
    </div>
  );
};

export default Counter;
