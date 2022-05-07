import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/View/User/User';
import Admin from './components/View/Admin/Admin';
import Login from './components/View/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/login/*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
