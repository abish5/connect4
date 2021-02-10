import React from 'react'
import { Navbar, Card, ListGroup, ListGroupItem, Form, FormControl, Button } from 'react-bootstrap'
import Navigation from './Navigation'

export default function Profile() {
    return (
        <div>
            <Navigation />
            <div>
                <div style={{display: 'flex'}}>
                    <Card className="d-flex align-self-center m-3" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Username</Card.Title>
                            <Card.Text> Online / Offline</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Wins</ListGroupItem>
                            <ListGroupItem>Losses</ListGroupItem>
                            <ListGroupItem>Draws</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Add </Card.Link>  {/*When viewing someone elses page*/}
                            <Card.Link href="#">Message</Card.Link> {/*When viewing someone elses page*/}
                        </Card.Body>
                    </Card>

                    <Card className="d-flex align-self-start m-3" style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Game 1: TestUser vs TestUser 2</ListGroup.Item>
                            <ListGroup.Item>Game 1: TestUser vs TestUser 3</ListGroup.Item>
                            <ListGroup.Item>Game 1: TestUser vs TestUser 5</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div>
                    <Navbar className="bg-light justify-content-between mt-3">
                        <h4>
                            Add a friend
                        </h4>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Navbar>

                    <Form className="bg-light justify-content-between mt-3">
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Enter a friend</Form.Label>
                            <Form.Control type="message" placeholder="Enter message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
