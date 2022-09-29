import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState(false);
  const toggleCounter = (add = true) => {
    if (!add && counter <= 0) return setMessage(true);
    setMessage(false);
    if (add) setCounter((state) => state + 1);
    else setCounter((state) => state - 1);
  };
  return (
    <div>
      <button onClick={() => toggleCounter(false)}>-</button>
      <p>{counter}</p>
      <button onClick={() => toggleCounter()}>+</button>

      {message && <p>counter can not be less than zero</p>}
    </div>
  );
}

export default Counter;
