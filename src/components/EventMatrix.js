import { useContext, useEffect } from 'react'
import { Context } from '../contexts/Context'
import Sound from "react-sound";
import snare from '../sounds/snare.mp3'
import kick from '../sounds/kick.mp3'
import { render } from '@testing-library/react';


const EventMatrix = () => {

  const context = useContext(Context)

  const play = (state, i=0) => {

    state.voices.map((voice, i) => {
      return state.voices[voice] && state.voices[voice][i] ? (
        <Sound
          url={snare}
          playStatus={Sound.status.PLAYING}
        />
      ) : ''
    })    

    if (i<state.voices[0].length){
      setTimeout(function(){
        i++;
        play(state, i);
      },125);
    }
  }
  
  return context.state.voices.length ? play(context.state) : ''
  
}
 
export default EventMatrix;