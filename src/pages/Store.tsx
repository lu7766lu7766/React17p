import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../types";

export default function Store(): JSX.Element {
  const storeCount = useSelector((state: State) => state.count);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="bg-red-400 p-4">
      <section>
        <h3>StateCount:</h3>
        {count}
        <div>
          <button className="btn btn-blue" onClick={() => setCount(count + 1)}>
            +1
          </button>
        </div>
      </section>

      <section>
        <h3>StoreCount:</h3>
        {storeCount}
        <div>
          <button
            className="btn btn-blue"
            onClick={() =>
              dispatch({ type: "INCREMENT", value: storeCount + 2 })
            }
          >
            +2
          </button>
        </div>
      </section>
    </div>
  );
}
