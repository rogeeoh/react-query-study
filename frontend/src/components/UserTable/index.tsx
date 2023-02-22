import React from 'react';
import {useQuery} from "react-query";
import {useNavigate} from "react-router-dom";
import {fetcher} from "../../utils/fetcher";

export interface UsersResponseType {
  msg: string;
  users: User[];
}

export interface User {
  id: number;
  email: string;
  password: string;
}

const UserTable = () => {
  const navigate = useNavigate();
  const {
    data: response,
    isLoading,
    isFetching
  } = useQuery(['users'], () => fetcher<UsersResponseType>('http://localhost:3030/users'), {
    staleTime: 1000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <div>Updating...</div>;
  }

  if (!response) {
    return <div>Failed to fetch data</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {response.users.map((user: User) => (
          <tr key={user.id} onClick={() => { navigate(`/users/${user.id}`)}}>
            <td>{user.id}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;