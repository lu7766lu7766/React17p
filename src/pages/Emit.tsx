import { Props } from "../types";

export default function Emit(props: Props): JSX.Element {
  return (
    <button type="button" className="btn btn-yellow" onClick={props.onClick}>
      EmitClick
    </button>
  );
}
