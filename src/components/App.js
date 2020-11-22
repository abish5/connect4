import React from "react"
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import Game from './Game'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Container 
      className='d-flex flex-column align-items-center'
      style={{ minHeight: '100vh'}}
    >
      <div className='w-100' style={{maxWidth: "1000px"}}> 
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/play" component={Game}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/login" component={Login}></Route>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
