import { Context } from '../contexts/Context'
import { useContext } from 'react' 

const ExtendTrack = () => {
  
  const context = useContext(Context)
  const handleSubmit = (e) => {

    for (let i = 0; i < context.state.voices.length; i++) {
      let status = Math.round(Math.random())
      context.state.voices[i].push(status)
    }
    for (let i = 0; i < context.state.customVoices.length; i++) {
      let status = Math.round(Math.random())
      context.state.customVoices[i].push(status)
    }

    context.setState({ 
      voices:       context.state.voices,
      customVoices: context.state.customVoices 
    })

  }
  
  return context ? ( 
    <button
      onClick={handleSubmit}
    >
      Extend Track
    </button>
   ) : '';
}
 
export default ExtendTrack;