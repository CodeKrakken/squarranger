import { useContext } from "react";
import { Context } from '../contexts/Context'
import React from 'react';


const Box = ({checkStatus, index, voiceId}) => {

  const context = useContext(Context)

  return (
    <input type="checkbox" defaultChecked={checkStatus} onChange={e => {

      context.state.voices[voiceId][index-1] = !context.state.voices[voiceId][index-1]
      context.setState({ voices: context.state.voices, sounds: context.state.sounds, soundBank: context.state.soundBank })

    }} />
  );
}

export default Box;