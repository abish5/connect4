import React from 'react'
import Navigation from './Navigation'
import { Card, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Home(props) {
    const { currentUser } = useAuth()
    return (
        <div>
            <Navigation />
            <Card>
                {/* <h2 className='text-center'>Welcome To Connect 4 {currentUser.username}!</h2> */}
            </Card>
        </div>
    )
}
