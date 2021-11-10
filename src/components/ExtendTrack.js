import { Context } from '../contexts/Context'
import { useContext } from 'react' 

const ExtendTrack = () => {
  
  const context = useContext(Context)
  const handleSubmit = (e) => {

    for (let i = 0; i < context.state.voices.length; i++) {
      let status = Math.round(Math.random())
      context.state.voices[i].push(status)
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