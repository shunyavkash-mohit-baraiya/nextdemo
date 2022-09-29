import React, { useState } from "react";

import "./counter.css";

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
    <>
      <div className="counter_container">
        <button className="counter_button" onClick={() => toggleCounter(false)}>
          -
        </button>
        <p className="counter_screen">{counter}</p>
        <button className="counter_button" onClick={() => toggleCounter()}>
          +
        </button>
      </div>
      {message && <p className="error">counter can not be less than zero</p>}
    </>
  );
}

export default Counter;
