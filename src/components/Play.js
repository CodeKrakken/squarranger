import { useContext } from "react";
import { Context } from '../contexts/Context'
import useSound from 'use-sound';
import drumHit from '../sounds/drumHit.mp3';

const Play = () => {

  const context = useContext(Context)

  const [play] = useSound(drumHit);

  const iterate = (beats, i=0) => {
    if (beats[i]) { play() }
    if (i<beats.length){
       setTimeout(() => {
           i++;
           play(beats, i);
       },1000);
    }
  }

  const handleClick = (e) => {
    console.log('Playing')
    iterate(context.state.boxes)
  }

  return ( 
    <button onClick={handleClick}>
      Play
    </button>
   );
}
 
export default Play;
