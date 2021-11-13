import { Context } from '../contexts/Context'
import { useContext } from 'react' 

const AddVoice = () => {
  
  const context = useContext(Context)
  console.log(context)
  const handleSubmit = (e) => {

    let newVoice = []

    for (let i = 0; i < context.state.voices[0].length; i++) {
      newVoice.push(Math.round(Math.random()))
    }

    context.state.customVoices.push(newVoice)
    context.setState({ customVoices: context.state.customVoices })
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