import { useContext } from "react";
import { Context } from '../contexts/Context'

const Box = ({checkStatus, index}) => {

  const context = useContext(Context)

  return (
    <input type="checkbox" defaultChecked={checkStatus} onChange={e => {

      context.state.voices[index-1] = !context.state.voices[index-1]
      context.setState({ voices: context.state.voices })
      console.log(context.state)
    }} />
  );
}
 
export default Box;