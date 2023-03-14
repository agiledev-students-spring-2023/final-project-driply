import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (username, password) => {
    setIsLoading(true)
    setError(null)

    // save the user to local storage
    localStorage.setItem("user", JSON.stringify({ username: username }))
    // update the auth context
    dispatch({type: 'LOGIN', payload: { username: username }})

    // update loading state
    setIsLoading(false)

    /*
    will be using this code for when backend is created for logging in users
    */
    // const response = await fetch('/api/accounts/login', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({ username, password })
    // })
    // const json = await response.json()

    // if (!response.ok) {
    //   setIsLoading(false)
    //   setError(json.error)
    // }
    // if (response.ok) {
    //   // save the user to local storage
    //   localStorage.setItem('user', JSON.stringify(json))

    //   // update the auth context
    //   dispatch({type: 'LOGIN', payload: json})

    //   // update loading state
    //   setIsLoading(false)
    // }
  }

  return { login, isLoading, error }
}