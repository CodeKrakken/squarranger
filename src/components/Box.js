import { useContext } from "react";
import { Context } from '../contexts/Context'
import React from 'react';

const Box = ({checkStatus, indexArray, voiceId}) => {

  const context = useContext(Context)

  return (
    <input type="checkbox" defaultChecked={checkStatus} onChange={e => {

      indexArray.map(index => {
        console.log(index)
        console.log(context.state.voices[voiceId][index])
        context.state.voices[voiceId][index] = checkStatus === true ? 1 : 0
        checkStatus = !checkStatus

      })

      context.setState({ voices: context.state.voices, sounds: context.state.sounds, soundBank: context.state.soundBank })

    }} />
  );
}

export default Box;