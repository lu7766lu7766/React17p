import React, { useEffect, useState } from "react";

export default React.memo(function EventBus() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("destroyed");
    };
  }, []);

  return (
    <div className="bg-orange-200 p-4">
      <input
        type="text"
        className="form-input block w-full my-4"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      watch console, it will console.log when component destroyed
    </div>
  );
});
