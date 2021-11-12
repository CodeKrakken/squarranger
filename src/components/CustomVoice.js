import Box from "./Box";
import { useContext } from "react";
import { Context } from '../contexts/Context'

const CustomVoice = ({voiceId}) => {

  const context = useContext(Context)

  return context && context.state && context.state.voices && context.state.voices[voiceId] ? (
    context.state.voices[voiceId].map((box, i) => {

        let id = i+1
        return (
          <Box
            key={id}
            index={id}
            checkStatus={box}
            voiceId={voiceId}
          />
        )
    }
  )) : ''
}
 
export default CustomVoice;