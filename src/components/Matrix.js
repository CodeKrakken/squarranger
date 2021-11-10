import Voice from "./Voice"
import { useContext } from "react"
import { Context } from '../contexts/Context'

const Matrix = () => {
  
  const context = useContext(Context)
  
  return context && context.state && context.state.voices ? (
    context.state.voices.map((voice, i) => {

      let voiceId = i

      return (
        <div key={voiceId}>
          <Voice 
            key={voiceId}
            voiceId={voiceId}
            boxes={voice}
          />
        </div> 
      )
    })
  ) : '';
}
 
export default Matrix;