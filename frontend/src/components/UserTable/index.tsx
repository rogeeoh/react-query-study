import React from 'react';
import {useInfiniteQuery} from "react-query";
import {useNavigate} from "react-router-dom";
import {fetcher} from "../../utils/fetcher";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

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
  const {data: response, isLoading, isFetching, fetchNextPage, hasNextPage} = useInfiniteQuery(['users'],
    ({pageParam = 1}) => fetcher<UsersResponseType>(`http://localhost:3030/users?page=${pageParam}`),
    {
      getNextPageParam: ({hasNextPage, page}) => hasNextPage ? parseInt(page) + 1 : undefined
    }
  );

  useInfiniteScroll(() => {
    if (hasNextPage) fetchNextPage();
  });

  if (isLoading) {
    return <div>Loading...</div>;
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
        {response.pages.map((page) => {
          return page.users.map((user: User) => (
            <tr key={user.id} onClick={() => {
              navigate(`/users/${user.id}`)
            }}>
              <td style={{display: 'table-cell', border: '1px solid black', padding: 5, cursor: 'pointer'}}>{user.id}</td>
              <td style={{display: 'table-cell', border: '1px solid black', padding: 5, cursor: 'pointer'}}>{user.email}</td>
            </tr>
          ))
        })}
        </tbody>
      </table>
      {isFetching && <h2>Updating...</h2>}
    </div>
  );
};

export default UserTable;