import React from 'react';
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useNavigate, useParams} from "react-router-dom";
import {fetcher} from "../../utils/fetcher";
import {User} from "../UserTable";

interface UserResponseType {
  msg: string;
  user: User;
}

const UserDetailPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {data, isLoading, isFetching, refetch} = useQuery(
    ['users', id],
    () => fetcher<UserResponseType>(`http://localhost:3030/users/${id}`));

  // delete user using useMutation
  const {mutate} = useMutation(
    () => fetcher<UserResponseType>(`http://localhost:3030/users/${id}`, {
      method: 'DELETE'
    }),
    {
      onSuccess: () => {
        navigate('/users');
        queryClient.invalidateQueries(['users', id]);
      }
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <div>Updating...</div>;
  }

  return (
    <div>
      <h1>User Detail Page</h1>
      <div>
        <div>ID: {data?.user.id}</div>
        <div>Email: {data?.user.email}</div>
        <div>Password: {data?.user.password}</div>
        <button onClick={() => refetch()}>다시 가져오기</button>
        <button onClick={() => mutate()}>삭제하기
        </button>
      </div>
    </div>
  );
};

export default UserDetailPage;