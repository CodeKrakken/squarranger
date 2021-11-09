import Checkbox from "./Checkbox";
import { useContext } from "react";
import { Context } from '../contexts/Context'

const Line = ({index}) => {

  const context = useContext(Context)

  return context && context.state && context.state.boxes ? (
    context.state.boxes[index].map((box, i) => {

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