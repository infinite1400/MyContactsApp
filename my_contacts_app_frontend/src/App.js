import { Routes, Route } from 'react-router-dom';
import './App.css';

// Dependencies
import Home from './Home';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import Contacts from './Components/Contacts/Contacts';
import CreateContact from './Components/Contacts/CreateContact';
import UpdateContact from './Components/Contacts/UpdateContact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/contacts/create' element={<CreateContact />} />
      <Route path='/contacts/update' element={<UpdateContact />} />
    </Routes>
  );
}

export default App;
