import React from 'react'
import Navigation from './Navigation'
import { Card, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Lobbies() {
    return (
        <div>
            <Navigation />
            <Button className="m-3" variant="primary" type="submit">
                Create a Game
            </Button>
            <Form className="m-3">
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Find a specific game</Form.Label>
                    <Form.Control type="password" placeholder="Enter a user" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Card className="mw-100 m-3">
                <Card.Body>
                    <Card.Title>Test</Card.Title>
                    <Card.Text>
                    test
                    </Card.Text>
                    <Button variant="primary">Join</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
