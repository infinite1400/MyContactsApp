import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Register from './Components/Authentication/Register';
import Login from './Components/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
