import { useState } from "react";

export default function Computed(): JSX.Element {
  const [count, setCount] = useState(0);
  get double() { return count * 2 }

  return (
    <div>
      <div>Count: {count}</div>
      <div>Double*2: {double}</div>
    </div>
  );
}
