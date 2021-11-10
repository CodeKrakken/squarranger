import { useContext } from "react";
import { Context } from '../contexts/Context'

const Box = ({checkStatus, index, voiceId}) => {

  const context = useContext(Context)

  return (
    <input type="checkbox" defaultChecked={checkStatus} onChange={e => {

      context.state.voices[voiceId][index-1] = !context.state.voices[voiceId][index-1]
      context.setState({ voices: context.state.voices })
      console.log(context.state)
    }} />
  );
}
 
export default Box;