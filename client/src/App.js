import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import SignLog from './pages/SignLog'
import Create from './pages/Create'
import List from './pages/List'
import Character from './pages/Character'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import LoginButton from "./components/LoginButton/login-button";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={"/"} ><Home /></Route>

        <Route exact path={"/signlog"} ><SignLog /></Route>

        <Route exact path={"/create"} ><Create /></Route>

        <Route exact path={"/list"} ><List /></Route>

        <Route exact path="/characters/:id"><Character /></Route>
      </Switch>
      <Footer />
    </Router >
  );
}

export default App;
