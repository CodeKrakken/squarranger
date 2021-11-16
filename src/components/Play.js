import { useContext } from "react";
import { Context } from '../contexts/Context'
import useSound from '../hooks/useSound';

const Play = () => {

  const context = useContext(Context)
  // const state.voices = context.state.voices
  const [play0] = useSound(context.state.soundBank[0]);
  const [play1] = useSound(context.state.soundBank[1]);

  const play = (state, i=0) => {

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
    console.log(state)
    useSound(state.soundBank[state.sounds[i]])
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