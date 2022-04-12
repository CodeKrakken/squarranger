import Voice from "./Voice"
import { useContext, useEffect } from "react"
import { Context } from '../contexts/Context'
import AddSample from "./AddSample"
import React from 'react';

const Matrix = () => {
  
  const context = useContext(Context)

  useEffect(() => {
    if (typeof sessionStorage.state === 'undefined') {
      console.log('creating')
      for (let voice = 0; voice < 2; voice++) {
        let voiceData = []
        for (let beat = 0; beat < 16; beat++) {
          let status = Math.round(Math.random())
          voiceData.push(status)
        }
        let sound = Math.round(Math.random() * (context.state.soundBank.length-1))
        context.state.voices.push(voiceData)
        context.state.sounds.push(sound)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      context.setState({ voices: context.state.voices, sounds: context.state.sounds, soundBank: context.state.soundBank })
     
      Object.keys(context.state).map(key => {
        sessionStorage[key] = context.state[key]
      })
    } else {
      console.log('reading')
      console.log(sessionStorage)
      context.setState({ voices: sessionStorage.voices, sounds: sessionStorage.sounds, soundBank: sessionStorage.soundBank })
    }


  }, [])
    
  if (context && context.state && context.state.voices) {
    console.log(context.state)
    let voices = context.state.voices.map((voice, i) => {

      let voiceId = i

      return (
        <div key={voiceId}>
          <AddSample />
          <Voice 
            key={voiceId}
            voiceId={voiceId}
            boxes={voice}
          />
        </div> 
      )
    })

    
    return voices
  };

}
 
export default Matrix;