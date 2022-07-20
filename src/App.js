import {Routes, Route, Redirect} from 'react-router-dom';

import './App.css';
import Login from './Components/Login/Login';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Profil/Profil';
import { UserProvider } from './Components/UserContext/UserContext';
import Profil from './Components/Profil/Profil';
import Create from './Components/Create/Create';
import Fill from './Components/Fill/Fill';


function App() {
  return (
    <div className="App">

      <UserProvider value="[]" >

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/create/:id" element={<Create />} />
        <Route path="/fill/:id" element={<Fill />} />

      </Routes>

      </ UserProvider >

    </div>
  );
}

export default App;


