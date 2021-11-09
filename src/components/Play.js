import { useContext } from "react";
import { Context } from '../contexts/Context'
import useSound from 'use-sound';
import kick from '../sounds/kick.mp3';
import snare from '../sounds/snare.mp3'

const Play = () => {

  const context = useContext(Context)
  const [playKick] = useSound(kick);
  const [playSnare] = useSound(snare)

  const play = (matrix, i=0) => {

    for (let voice in matrix) {

      console.log(voice)

      if (matrix[voice][i]) { 
        playKick();
        playSnare();
        console.log('BANG!') }

    }
    
      




      if (i<matrix.length){
        setTimeout(function(){
            i++;
            play(matrix, i);
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