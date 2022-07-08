import {Routes, Route, Redirect} from 'react-router-dom';

import './App.css';
import Login from './Components/Login/Login';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Login />} />

      </Routes>


    </div>
  );
}

export default App;
