import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { User } from "../types/types";
import { getUsers } from "../api/api";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response));
  }, []);

  return (
    <>
      {users.map((e) => (
        <UserCard name={e.name} avatarUrl={e.avatarUrl} />
      ))}
    </>
  );
};

export default UsersList;
