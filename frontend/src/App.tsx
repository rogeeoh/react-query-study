import React, {useEffect} from 'react';
import UserTable from "./components/UserTable";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import UserDetailPage from "./components/UserDetailPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/users');
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/users" element={<UserTable/>}/>
        <Route path="/users/:id" element={<UserDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
