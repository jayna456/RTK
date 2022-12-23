import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

function Counter(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log("counter ", counter);
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div>
      <section>
        {counter && (
          <>
            <p style={{ color: "red" }}>{counter.count}</p>
            <div>
              <button onClick={() => dispatch(increment())}>+</button>
              <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
              <input
                type={"number"}
                placeholder="Add amount"
                onChange={(e) => setIncrementAmount(e.target.value)}
              />
            </div>
            <div>
              <button onClick={() => dispatch(reset())}>Reset</button>
              <button
                onClick={() => dispatch(incrementByAmount(incrementAmount))}
              >
                Increment by amount
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Counter;
