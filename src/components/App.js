import React from "react"
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import Lobbies from './Lobbies'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Leaderboard from "./Leaderboard"
import { useAuth } from "../contexts/AuthContext"

function PrivateRoute({children, ...rest}) {
  const { currentUser } = useAuth()
  return(
    <Route {...rest} render={() => {
      return currentUser !== undefined
          ? children
          : <Redirect to='/login' />
    }}></Route>
  )
}

function AuthRoute({children, ...rest}) {
  const { currentUser } = useAuth()
  return(
    <Route {...rest} render={() => {
      return currentUser !== undefined
          ? <Redirect to='/' />
          : children
    }}></Route>
  )
}

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
              <AuthRoute exact path="/login">
                <Login />
              </AuthRoute>
              <AuthRoute path="/signup">
                <Signup />
              </AuthRoute>
        
              <PrivateRoute path="/play" component={Lobbies}> 
                <Lobbies />
              </PrivateRoute>
              <PrivateRoute path="/leaderboard">
                <Leaderboard />
              </PrivateRoute>
              <PrivateRoute exact path="/">
                <Home />
              </PrivateRoute>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
