import logo from './logo.svg';
import './App.css';
import React from 'react';
// Components
import Navbar from './components/navBar/navBar';
import CreateAccount from './components/CreateAccount/CreateAccount'
import Home from './components/Home/Home'
import Deposit from "./components/Deposit/Deposit";
import Withdraw from './components/Withdraw/Withdraw';
import AllData from './components/AllData/AllData';
import Login from './components/login/Login';

import { BrowserRouter,   } from 'react-router-dom';
import {Route, Routes} from 'react-router';

export const UserContext = React.createContext({
  users:{},

});
console.log(UserContext);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={UserContext}/>

        <Routes > 
            <Route path="/" element={<Home user={UserContext}/>}></ Route>
            <Route path="/createAccount" element={<CreateAccount user={UserContext}/>}>
            </Route>
            <Route path="/deposit" element={<Deposit user={UserContext}/>}>
            </Route>
            <Route path="/withdraw" element={<Withdraw user={UserContext}/>}>
            </Route>
            <Route path="/AllData" element={<AllData user={UserContext}/>}>
            </Route>
        </ Routes>
        
    </BrowserRouter>
    </div>
  );
}

export default App;
