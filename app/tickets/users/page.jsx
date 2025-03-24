import { IconCheck, IconUserOff } from "@tabler/icons-react";

const users = [
  {
    name: "Alice Ling",
    job: "Software Engineer",
    isAvailable: false,
  },
  {
    name: "Jose X",
    job: "Software Engineer",
    isAvailable: true,
  },
  // ... add as much users as you want
];

export default function TicketUsersPage() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>{" "}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td
              style={{
                display: "flex",
                color: !user.isAvailable ? "red" : undefined,
              }}
            >
              {user.isAvailable ? <IconCheck /> : <IconUserOff />} {user.name}
            </td>

            <td>{user.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
