import Checkbox from "./Checkbox";
import { useContext } from "react";
import { Context } from '../contexts/Context'

const Line = () => {

  const context = useContext(Context)

  let id = 0
  return context && context.state && context.state.boxes ? (
    context.state.boxes.map(box => {
      id ++
      return (
        <Checkbox
          key={id}
          checked={box}

        />
      )
    })
  ) : ''
}
 
export default Line;