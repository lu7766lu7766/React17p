type Props = {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
};

export default function Slot(props: Props): JSX.Element {
  return (
    <div className="text-red-500">
      <div>TopSlot: {props.top}</div>
      <div>BottomSlot: {props.bottom}</div>
    </div>
  );
}
