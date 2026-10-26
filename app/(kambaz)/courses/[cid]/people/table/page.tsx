import { FaUserCircle } from "react-icons/fa";

const people = [
  ["Tony Stark", "001234561S", "S101", "STUDENT", "2020-10-01", "10:21:32"],
  ["Bruce Wayne", "001234562S", "S101", "STUDENT", "2020-11-02", "23:32:23"],
  ["Steve Rogers", "001234563S", "S101", "STUDENT", "2020-10-02", "13:21:32"],
  ["Natasha Romanoff", "001234564S", "S101", "TA", "2020-11-05", "11:22:33"],
  ["Thor Odinson", "001234565S", "S101", "STUDENT", "2020-12-01", "11:22:33"],
  ["Bruce Banner", "001234566S", "S101", "STUDENT", "2020-12-01", "22:33:44"],
  ["Frodo Baggins", "001234567S", "S101", "FACULTY", "2020-12-02", "44:33:22"],
  ["Jane Sample", "001234570S", "S101", "STUDENT", "2020-12-05", "10:10:10"],
  ["Alex Sample", "001234571S", "S101", "TA", "2020-12-06", "11:11:11"],
  ["Sam Sample", "001234572S", "S101", "FACULTY", "2020-12-07", "12:12:12"],
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map(([name, ...cells]) => (
            <tr key={name} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {name}
              </td>
              {cells.map((cell) => (
                <td key={cell} className="p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
