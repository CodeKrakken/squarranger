import { useContext } from "react";
import { Context } from '../contexts/Context'

const Play = () => {

  const context = useContext(Context)

  var a = [
    1,2,3,4,5,6,7,8,9,10
    ];

  const play = (beats, i=0) => {
    if (beats[i]) { console.log('BANG!') }
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