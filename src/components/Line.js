import Checkbox from "./Checkbox";
import { useContext } from "react";
import { Context } from '../contexts/Context'

const Line = () => {

  const context = useContext(Context)
  console.log(context)

  return context && context.state && context.state.boxes ? (
    context.state.boxes.map((box, i) => {

      let id = i+1
      return (
        <Checkbox
          key={id}
          index={id}
          checked={box}
        />
      )
    }
  )) : ''
}
 
export default Line;