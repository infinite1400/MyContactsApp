import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import Contacts from './Components/Contacts/Contacts';
import CreateContact from './Components/Contacts/CreateContact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/contacts/create' element={<CreateContact />} />
    </Routes>
  );
}

export default App;
