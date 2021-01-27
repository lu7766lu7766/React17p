type thProps = {
  className: string;
  width: number;
};
type iField = {
  key: string;
  title: string;
  thProps?: thProps;
  tdProps?: unknown;
};
type Props = {
  fields: Array<iField>;
  datas: Array<any>;
};
export default function DataTable(props: Props): JSX.Element {
  const { datas, fields } = props;
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {fields.map((field) => (
            <th
              {...field.thProps}
              className={
                "px-6 py-3 border-b-2 border-gray-300 leading-4 tracking-wider text-center " +
                field.thProps?.className
              }
              key={field.key}
            >
              {field.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {datas.map((data, di) => (
          <tr
            className="px-6 py-4 whitespace-no-wrap border-b border-gray-500"
            key={di}
          >
            {fields.map((field, fi) => (
              <td key={"fi" + fi} {...field.tdProps}>
                {data[field.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
