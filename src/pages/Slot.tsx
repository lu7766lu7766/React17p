import { Props } from "../types";

export default function Slot(props: Props): JSX.Element {
  return <div className="text-red-500">Slot: {props.children}</div>;
}
