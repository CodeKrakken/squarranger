import Line from "./Line"
import { useContext } from "react"
import { Context } from '../contexts/Context'

const Matrix = () => {
  
  const context = useContext(Context)
  console.log(context)
  
  return context && context.state && context.state.lines ? (
    context.state.lines.map((line, i) => {

      let id = i+1

      return (
        <div key={id}>
          <Line 
            key={id}
            index={i}
            boxes={line}
          />
        </div> 
      )
    })
  ) : '';
}
 
export default Matrix;