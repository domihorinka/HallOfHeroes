import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignLog from './pages/SignLog'
import Create from './pages/Create'
import List from './pages/List'
import Character from './pages/Character'
import Nav from './components/Nav/Nav'
// import LoginButton from "./components/LoginButton/login-button";
// import {Auth0Provider} from"@auth0/auth0-react";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home}></Route>

      <Route exact path="/signlog" component={SignLog}></Route>

      <Route exact path="/create" component={Create}></Route>

      <Route exact path="/list" component={List}></Route>

      <Route exact path="/character" component={Character}></Route>

    </Router >
  );
}

export default App;
