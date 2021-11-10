import { Context } from '../contexts/Context'
import { useContext } from 'react' 

const ExtendTrack = () => {
  
  const context = useContext(Context)
  const handleSubmit = (e) => {

    for (let i = 0; i < context.state.voices.length; i++) {
      context.state.voices[i].push(false)
    }
    context.setState({ voices: context.state.voices })

  }
  
  return context ? ( 
    <button
      onClick={handleSubmit}
    >
      +
    </button>
   ) : '';
}
 
export default ExtendTrack;