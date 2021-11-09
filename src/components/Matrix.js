import Line from "./Line"
import { useContext } from "react"
import { Context } from '../contexts/Context'

const Matrix = () => {
  
  const context = useContext(Context)
  console.log(context)
  
  return context ? (
    context.state.lines.map((line, i) => {

      let id = i+1

      return (
        <Line 
          key={id}
          index={id-1}
          boxes={line}
        />
      )
    })
  ) : '';
}
 
export default Matrix;