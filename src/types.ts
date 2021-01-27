export type Action<T> = {
  type: string;
  value: T;
};

export type State = {
  count: number;
};

export type Props = {
  children?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};
