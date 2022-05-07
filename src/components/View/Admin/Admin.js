import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import './Admin.css';
import Questions from './Questions/Questions';

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isAuthenticated'));
  const [username] = useState(localStorage.getItem('username'));

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
  }

  return (
      !loggedIn
    ? 
      <Routes><Route path="/" element={ <Navigate to="/login" /> } /></Routes>
    :
      <div className='Admin'>
        <div className='Admin__header'>
          <h1 className='Admin__header__name'>Welcome, {username}</h1>
          <button onClick={logout} className='Admin__header__logout'>Logout</button>
        </div>
        <Questions />
      </div>
  )
}

export default Admin;
