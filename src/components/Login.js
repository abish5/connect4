import React, { useState, useRef} from 'react'
import { Form, Button, Card, FormControl, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
 
    try {
      setError('')
      setLoading(true)
      
      if(login(usernameRef.current.value, passwordRef.current.value) === 404) {
        setLoading(false)
        console.log("HE")
        setError('User not found')
      } else {
        history.push("/")
      }
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
  
  }

  return (
    <>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={ handleSubmit }>
              <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <FormControl type="username" ref={usernameRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <FormControl type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
            </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
