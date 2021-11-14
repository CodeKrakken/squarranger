import { useContext } from "react";
import { Context } from '../contexts/Context'
import useSound from 'use-sound';

const Play = () => {

  const context = useContext(Context)
  // const state.voices = context.state.voices
  const [playKick] = useSound(context.state.soundBank.kick);
  const [playSnare] = useSound(context.state.soundBank.snare);

  const play = (state, i=0) => {

    console.log(state)

    for (let voice in state.voices) {voice = +voice

      if (state.voices[voice][i]) { 
        playVoice(state, voice)
      }
    }

    if (i<state.voices[0].length){
      setTimeout(function(){
        i++;
        play(state, i);
      },125);
    }
  }

  const playVoice = (state, i) => {
    if (i < state.soundBank.length) {
      let voices = state.soundBank
      voices[i]()
    }
  }

  const handleClick = (e) => {
    play(context.state)
  }

  return ( 
    <button onClick={handleClick}>
      Play
    </button>
   );
}
 
export default Play;