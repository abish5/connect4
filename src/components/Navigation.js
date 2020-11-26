import React from 'react'
import { Card, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Navigation() {
    const { currentUser } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{width:"700px"}}>
                <Navbar.Brand href="/">Connect 4</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                <div style={{marginLeft:"225px"}}>
                    <Nav.Link href="profile">Welcome, { currentUser.username } </Nav.Link>
                </div>
                </Nav>
            </Navbar>   
        </>
    )
}
