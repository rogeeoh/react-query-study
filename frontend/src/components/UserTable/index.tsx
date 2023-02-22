import React from 'react';
import {useNavigate} from "react-router-dom";

export interface UsersResponseType {
  msg: string;
  users: User[];
  page: string;
  hasNextPage: boolean;
}

export interface User {
  id: number;
  email: string;
  password: string;
}

const UserTable = () => {
  const navigate = useNavigate();
  // TODO: useQuery를 이용해서 users를 가져오는 로직을 작성하세요.
  const data: UsersResponseType = { users: [], msg: '', page: '', hasNextPage: false };

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
        {data?.users.map((user: User) => (
            <tr key={user.id} onClick={() => {
              navigate(`/users/${user.id}`)
            }}>
              <td style={{display: 'table-cell', border: '1px solid black', padding: 5, cursor: 'pointer'}}>{user.id}</td>
              <td style={{display: 'table-cell', border: '1px solid black', padding: 5, cursor: 'pointer'}}>{user.email}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;