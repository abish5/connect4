import React from 'react'
import { Card, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Connect 4</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link href="#Placeholder">Placeholder</Nav.Link>
                <Nav.Link href="#Placeholder">Placeholder</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>   
        </>
    )
}
