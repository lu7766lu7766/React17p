import bus from "../lib/EventBus";
import React, { useState } from "react";

export default React.memo(function EventBus() {
  const [name, setName] = useState("");
  const emitEvent = () => bus.emit("change-name", name);

  return (
    <div className="bg-orange-200 p-4">
      <input
        type="text"
        className="form-input block w-full my-4"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button type="button" className="btn btn-yellow" onClick={emitEvent}>
        EventBusChangeName
      </button>
    </div>
  );
});
