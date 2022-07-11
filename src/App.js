import {Routes, Route, Redirect} from 'react-router-dom';

import './App.css';
import Login from './Components/Login/Login';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Profil/Profil';
import { UserProvider } from './Components/UserContext/UserContext';
import Profil from './Components/Profil/Profil';

function App() {
  return (
    <div className="App">

      <UserProvider value="[]" >

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profil/:id" element={<Profil />} />

      </Routes>

      </ UserProvider >

    </div>
  );
}

export default App;
