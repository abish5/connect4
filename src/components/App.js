import React from "react"
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import Game from './Game'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Leaderboard from "./Leaderboard"


function App() {
  return (
    <Container 
      className='d-flex flex-column align-items-center w-100'
      style={{ border:"1px solid red", minHeight: '100vh'}}
    >
      <div className='d-flex flex-column align-items-center w-100' style={{maxWidth: "100%", border:"1px solid red"}}> 
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/play" component={Game}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/leaderboard" component={Leaderboard}></Route>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
