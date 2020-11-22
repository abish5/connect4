import React, { useContext, useState, useEffect } from 'react'

const AuthContext = React.createContext();
 
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [statusCode, setStatus] = useState();

    function signup(email, username, password) {
        fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password 
            })
        }).then(res => {
            if(res.status === 409) {
                return "409"
            } else{
                authStateChanged(res);
                return res.json()
            }
        })
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'))
    }
    
    function login(username, password) {
        console.log(statusCode)
        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password 
            })
        }).then(res => {
            if(res.status === 404) {
                console.log("User doesn't exist")
                setStatus(404)
            } else {
                setStatus(200)
                return res.json()                
            }
        })
        .then(data => authStateChanged(data))
        .catch(error => console.log(error))
        console.log("We are sending: " + statusCode)
        if(statusCode === undefined) {
            statusCode = 404
        }
        return statusCode
    }

    function currStatus(code) {
        setStatus(code)
    }

    function authStateChanged(user) {
        setCurrentUser(user);
    }

    useEffect(() => {
        const unsubscribe = null //setCurrentUser
            setLoading(false);
        return unsubscribe;
    }, [])
    
    const value = {
        currentUser,
        login,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
           {!loading && children} 
        </AuthContext.Provider>
    )
}
