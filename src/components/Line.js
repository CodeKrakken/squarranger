import Checkbox from "./Checkbox";
import { useContext } from "react";
import { Context } from '../contexts/Context'

const Line = () => {

  const context = useContext(Context)
  console.log(context)

  let length = [...context.boxes]
  let id = 0
  return (
    length.map(box => {
      id ++
      return (
        <Checkbox
          key={id}
          checked={box}
        />
      )
    })
  )
}
 
export default Line;