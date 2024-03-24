import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import AdminUserPage from '../AdminUserPage/AdminUserPage';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const meetRequest = useSelector((store) => store.requestMeetReducer);

  if (user.user_type === 'admin') {
    return (
      <div className="container">
        <h2>Hello, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <p>User Type: {user.user_type}</p>
        <p>
        {/* <div>
          <h3>First Name: {meetRequest.firstName}</h3>
          <h3>Last Name: {meetRequest.lastName}</h3>
          <h3>Email: {meetRequest.email}</h3>
          <h3>Phone: {meetRequest.phone}</h3>
          <h3>Details:</h3>
          <p>{meetRequest.details}</p>
        </div> */}
        </p>
        <LogOutButton className="btn" />
      </div>
    );
  } return (
    <div className="container">
    <h2>Welcome, {user.username}!</h2>
    <p>Your ID is: {user.id}</p>
    <p>User Type: {user.user_type}</p>
    <LogOutButton className="btn" />
  </div>
  )
}

// this allows us to use <App /> in index.js
export default UserPage;

// return (
//   <div className="container">
//     <h2>Welcome, {user.username}!</h2>
//     <p>Your ID is: {user.id}</p>
//     <p>User Type: {user.user_type}</p>
//     <LogOutButton className="btn" />
//   </div>
// );
// }
