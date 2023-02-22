import React from 'react';
import {User} from "../UserTable";

interface UserResponseType {
  msg: string;
  user: User;
}

const UserDetailPage = () => {
  // TODO: useQuery를 이용해서 user를 가져오는 로직을 작성하세요.
  const data: UserResponseType = { user: { id: 1, email: 'sample@gmail.com', password: '1234' }, msg: '' };

  return (
    <div>
      <h1>User Detail Page</h1>
      <div>
        <div>ID: {data?.user.id}</div>
        <div>Email: {data?.user.email}</div>
        <div>Password: {data?.user.password}</div>
        <button>다시 가져오기</button>
        <button>삭제하기
        </button>
      </div>
    </div>
  );
};

export default UserDetailPage;