import { createContext } from "react";

export const Context = createContext()

const ContextProvider = (props) => {


  const data = {
    boxes: [true, false, true, false]
  }

  return (
    <Context.Provider value={data}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider