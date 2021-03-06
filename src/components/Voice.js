import Box from "./Box";
import { useContext } from "react";
import { Context } from '../contexts/Context'
import React from 'react';

const Voice = ({voiceId}) => {

  const context = useContext(Context)


  return context && context.state && context.state.voices && context.state.voices[voiceId] ? <>
    {
      context.state.voices[voiceId].map((box, i) => {
        return (
          <Box
            key={i}
            indexArray={[i]}
            checkStatus={box}
            voiceId={voiceId}
          />
        )
      })
    }
    {"clear/populate all"}
    <Box
      indexArray={[...Array(context.state.voices[voiceId].length).keys()]}
      checkStatus={true}
      voiceId={voiceId}
    />
  </> : ''
}
 
export default Voice;