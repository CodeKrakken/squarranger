import { useContext } from "react";
import { Context } from '../contexts/Context'
import useSound from 'use-sound';
import kick from '../sounds/kick.mp3';
import snare from '../sounds/snare.mp3'

const Play = () => {

  const context = useContext(Context)
  const [playKick] = useSound(kick);
  const [playSnare] = useSound(snare)

  const play = (beats, beat=0) => {

    for (let voice = 0; voice < beats.length; voice++) {
      if (beats[voice][beat]) { 
        console.log(`Playing ${voice}`)
        playKick()
      }
    }

    if (beat<beats.length){
      setTimeout(function(){
          beat++;
          play(beats, beat);
      },1000);
    }
  }

  const handleClick = (e) => {
    console.log('Playing')
    play(context.state.boxes)
  }

  return ( 
    <button onClick={handleClick}>
      Play
    </button>
   );
}
 
export default Play;