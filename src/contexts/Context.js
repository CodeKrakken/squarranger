import { createContext } from "react";
import { useState } from 'react'
import kick from '../sounds/kick.wav';
import snare from '../sounds/snare.wav'
import React from 'react';

export const Context = createContext()

const ContextProvider = (props) => {

  const data = {
    voices: [],
    sounds: [],
    soundBank: [kick, snare]
  }

  const [state, setState] = useState(data)
  
  return (
    <Context.Provider value={{state, setState}}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider