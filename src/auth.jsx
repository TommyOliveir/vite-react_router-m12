
import { useContext, useState, createContext } from 'react'

const AuthContext = createContext(null)

import React from 'react'

export const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)

const login = (user) => {
    setUser(user)
}
const logout = () => {
    setUser(null)
}

return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
)

}

export const useAuth = () => {
    return useContext(AuthContext)
}
