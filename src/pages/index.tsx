import { useSelector } from "react-redux";
import { useMemo } from "react";
import { State } from "../types";
type Props = {
  name?: string;
};
export default function index(props: Props): JSX.Element {
  const storeCount = useSelector((state: State) => state.count);
  const message = useMemo(() => `hello ${props.name} Wang`, [props.name]);
  return (
    <div className="bg-orange-200 p-4">
      {message}
      <div className="mt-2">StoreCount: {storeCount}</div>
    </div>
  );
}
