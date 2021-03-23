import { useState, useMemo } from "react";

export default function Computed(): JSX.Element {
  const [count, setCount] = useState(0);
  const data = {
    double: useMemo(() => count * 2, [count]),
    get double4() {
      return count * 4;
    },
  };

  return (
    <div>
      <button className="btn-blue" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <div>Count: {count}</div>
      <div>Double*2: {data.double}</div>
      <div>Double*4: {data.double4}</div>
    </div>
  );
}
