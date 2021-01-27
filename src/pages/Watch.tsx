import { useState, useLayoutEffect } from "react";

export default function EventBus(): JSX.Element {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count >= 5) {
      setCount(0);
      console.log("too much");
    }
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>

      <button
        type="button"
        className="btn btn-yellow"
        onClick={() => setCount(count + 1)}
      >
        count++
      </button>
    </div>
  );
}
