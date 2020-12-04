import React from 'react'
import { Card, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'


export default function Navigation() {
    const { currentUser } = useAuth()

    function logout() {
        console.log("bye")
        localStorage.clear()
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{width:"700px"}}>
                <Navbar.Brand href="/">Connect 4</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link href="/gametest">game</Nav.Link>
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                <div style={{marginLeft:"250px"}}>
                    {console.log(currentUser)}
                    <Nav.Link href="/profile">Welcome, { currentUser && currentUser.username } </Nav.Link>
                    <Nav.Link onClick={ () => {logout()}} href="/login">Logout</Nav.Link>
                </div>
                </Nav>
            </Navbar>   
        </>
    )
}
