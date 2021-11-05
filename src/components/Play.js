import { useContext } from "react";
import { Context } from '../contexts/Context'

const Play = () => {

  const context = useContext(Context)

  const handleClick = (e) => {
    console.log(e)
  }

  return ( 
    <button onClick={handleClick}>
      Play
    </button>
   );
}
 
export default Play;