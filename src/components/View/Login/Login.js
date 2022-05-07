import './Login.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { sha256 } from 'js-sha256';

const API_KEY = process.env.REACT_APP_API_KEY;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('isAuthenticated') === 'true') {
      setLoggedIn(true);
    }
  }, [])

  const onSubmit = (event) => {
    event.preventDefault();

    axios.post('http://3.64.89.107/user', {username: username, password: sha256.create().update(password).hex()}, {
            headers: {
                'x-api-key': API_KEY
            }
        })
            .then((res) => {
              localStorage.setItem('isAuthenticated', 'true');
              localStorage.setItem('username', res.data.username);
              setLoggedIn(true);
        })
            .catch((error) => {
              setError(true);
        });
  }

  const usernameInput = (event) => {
    setUsername(event.target.value);
  }

  const passwordInput = (event) => {
    setPassword(event.target.value);
  }

  return (
    loggedIn
  ? 
    <Routes><Route path="/" element={ <Navigate to="/admin" /> } /></Routes>
  :
    <div className='Login'>
      <p className='Login__title'>Admin panel</p>
      <form onSubmit={onSubmit} className='Login__form'>
        <input className='Login__form__username' type='text' name='username' placeholder='username' onChange={usernameInput} value={username} required />
        <input className='Login__form__password' type='password' name='password' placeholder='password' onChange={passwordInput} value={password} required />
        <input className='Login__form__submit' type='submit' value='Login'/>
        {
          (error ? <p className='Login__form__error'>Incorrect credentials!</p> : '')
        }
      </form>
    </div>
  )
}

export default Login;
