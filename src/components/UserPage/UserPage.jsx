import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import AdminUserPage from '../AdminUserPage/AdminUserPage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const pets = useSelector((store) => store.pets);
  // history to route page onClick
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_PETS', payload: user.id });
  }, []);

  // checking for logged in user_type to show corresponding page info
  if (user.user_type === 'admin') {
    return (
      <AdminUserPage />
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
