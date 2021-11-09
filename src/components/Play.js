import { useContext } from "react";
import { Context } from '../contexts/Context'
import useSound from 'use-sound';
import drumHit from '../sounds/drumHit.mp3';

const Play = () => {

  const context = useContext(Context)
  const [makeSound] = useSound(drumHit);

  const play = (beats, i=0) => {
    if (beats[i]) { 
      makeSound();
      console.log('BANG!') }
    if (i<beats.length){
       setTimeout(function(){
           i++;
           play(beats, i);
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