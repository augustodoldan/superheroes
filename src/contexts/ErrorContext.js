import React, { useState } from 'react'

export const ErrorContext = React.createContext()

const ErrorContextProvider = (props) =>{
  const [error, setError] = useState(null)
  const initState = {
    error,
    setError
  }

  return (
    <ErrorContext.Provider value={initState}>
      {props.children}
    </ErrorContext.Provider>
  )
}

export default ErrorContextProvider



