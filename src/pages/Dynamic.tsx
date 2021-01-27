import Index from "./index";

export default function Dynamic(): JSX.Element {
  const TagName = { index: Index };

  return <TagName.index name="gg" />;
}
