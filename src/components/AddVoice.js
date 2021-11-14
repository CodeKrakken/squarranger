import { Context } from '../contexts/Context'
import { useContext } from 'react' 

const AddVoice = () => {
  
  const context = useContext(Context)
  const handleSubmit = (e) => {

    let newVoice = []

    for (let i = 0; i < context.state.voices[0].length; i++) {
      newVoice.push(Math.round(Math.random()))
    }

    context.state.voices.push(newVoice)
    context.setState({ voices: context.state.voices, sounds: context.state.sounds, soundBank: context.state.soundBank })

  }
  
  return context ? ( 
    <button
      onClick={handleSubmit}
    >
      Add Voice
    </button>
   ) : '';
}
 
export default AddVoice;