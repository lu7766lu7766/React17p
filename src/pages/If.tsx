import { useState } from "react";

export default function If(): JSX.Element {
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);

  return (
    <div>
      <select
        className="form-input w-full my-4"
        onChange={(e) => setName(e.target.value)}
      >
        <option value="">empty</option>
        <option value="0">Woman</option>
        <option value="1">Man</option>
      </select>
      {
        // v-if // v-else-if // v-else
        name == "" ? (
          <span>快選阿</span>
        ) : name == "0" ? (
          <span>女的</span>
        ) : name == "1" ? (
          <span>男的</span>
        ) : (
          ""
        )
      }
      <div>
        <button className="btn btn-blue" onClick={() => setShow(!show)}>
          switch show:{show.toString()}
        </button>
        <div>{show && <span>v-if</span>}</div>
        <div>
          <span
            style={{
              display: show ? "block" : "none"
            }}
          >
            v-show
          </span>
        </div>
      </div>
    </div>
  );
}
