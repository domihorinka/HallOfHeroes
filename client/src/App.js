import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Create from './pages/Create'
import List from './pages/List'
import Character from './pages/Character'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Router>
       <Auth0Provider
                           domain={`dev-xypsrewa.us.auth0.com`
                          }
                          clientId={`RfFm3fOupR7DPFWKZxVb3TMkruk3EhkY`}
                          redirectUri={window.location.origin}
                >
      <Nav />
      <Switch>
       

        <Route exact path={"/"} ><Home /></Route>


        <Route exact path={"/create"} ><Create /></Route>

        <Route exact path={"/list"} ><List /></Route>

        <Route exact path="/characters/:id"><Character /></Route>
      </Switch>
      <Footer />
      </Auth0Provider>

    </Router >
  );
}

export default App;
