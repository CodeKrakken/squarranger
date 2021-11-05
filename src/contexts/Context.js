import { createContext } from "react";
import { useState } from 'react'

export const Context = createContext()

const ContextProvider = (props) => {

  const data = {
    boxes: [true, false, true, false]
  }

  const [state, setState] = useState(data)
  

  const toggleState = (index) => {
    setState({ })
  }

  return (
    <Context.Provider value={{state, toggleState}}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider