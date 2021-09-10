import React, { useState } from 'react'

export const TeamContext = React.createContext()

const TeamContextProvider = (props) =>{
  const [team, setTeam] = useState([])
  const initState = {
    team,
    setTeam
  }

  return (
    <TeamContext.Provider value={initState}>
      {props.children}
    </TeamContext.Provider>
  )
}

export default TeamContextProvider









