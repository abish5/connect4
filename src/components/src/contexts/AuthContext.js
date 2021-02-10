import React, { useContext, useState, useEffect } from 'react'
const AuthContext = React.createContext();
 
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [statusCode, setStatus] = useState();

    async function signup(email, username, password) {
        await fetch("/signup", {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                username: username,
                password: password 
            })
        }).then(res => {
            if(res.status === 409) {
                return "409"
            } else{
                authStateChanged(res.body);
                return res.json()
            }
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
    
    async function login(username, password) {
        await fetch("/login", {
            method: 'POST',
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
            setStatus(404)
        }
        return statusCode
    }

    var authStateChanged = (user) => {
        localStorage.setItem("username", user.username)
        localStorage.setItem("password", user.password)
        localStorage.setItem("email", user.email)
        localStorage.setItem("friends", user.friends)
        setCurrentUser(user);
        setLoading(false)
    }
    useEffect(() => {
        if(localStorage.getItem("username") != null) {
            setCurrentUser({
                "username": localStorage.getItem("username"),
                "password": localStorage.getItem("password"),
                "email": localStorage.getItem("email"),
                "friends": localStorage.getItem("friends")
            });
        }
        setLoading(false)

    }, [])
    
    
    const value = {
        currentUser,
        login,
        signup,
    }
    return (
        <AuthContext.Provider value={value}>
           {!loading && children} 
        </AuthContext.Provider>
    )
}
