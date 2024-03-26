import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function AdminUserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
  <div className="container">
    <h2>Hello, {user.username}!</h2>
    <p>Your ID is: {user.id}</p>
    <p>User Type: {user.user_type}</p>
    <LogOutButton className="btn" />
  </div>
  )
};

// this allows us to use <App /> in index.js
export default AdminUserPage;
