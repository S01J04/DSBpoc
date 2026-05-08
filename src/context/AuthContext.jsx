import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem('dsb_user') || null)

  function login(username, password) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('dsb_user', username)
      setUser(username)
      return true
    }
    return false
  }

  function logout() {
    localStorage.removeItem('dsb_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
