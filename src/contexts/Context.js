import { createContext } from "react";
import { useState } from 'react'

export const Context = createContext()

const ContextProvider = (props) => {

  const data = {
    boxes: [true, false, true, false]
  }

  const [state, setState] = useState(data)
  
  return (
    <Context.Provider value={{state, setState}}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider