import moment from "moment";
import DataTable from "../components/DataTable";

type iStudent = {
  id: number;
  name: string;
  birthday: string;
  nameTxt?: string;
  antherDay?: string;
};

export default function List(): JSX.Element {
  const datas: Array<iStudent> = [
    {
      id: 1,
      name: "Jac",
      birthday: "1988-06-06"
    },
    {
      id: 2,
      name: "May",
      birthday: "2020-01-02"
    },
    {
      id: 3,
      name: "Frank",
      birthday: "1996-10-31"
    }
  ].map((x) => ({
    ...x,
    get nameTxt() {
      return `Proccessing ${this.name}`;
    },
    get antherDay() {
      return moment(this.birthday)
        .add(5, "years")
        .add(25, "days")
        .format("YYYY-MM-DD");
    }
  }));

  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              id
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              birthday
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {datas.map((data, key) => (
            <tr
              className="px-6 py-4 whitespace-no-wrap border-b border-gray-500"
              key={key}
            >
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <DataTable
        fields={[
          {
            key: "id",
            title: "ID",
            thProps: { width: 100, className: "text-yellow-400" },
            tdProps: { className: "text-center" }
          },
          { key: "nameTxt", title: "Name" },
          { key: "antherDay", title: "Birthday", thProps: { width: 200 } }
        ]}
        datas={datas}
      ></DataTable>
    </div>
  );
}
