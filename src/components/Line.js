import Checkbox from "./Checkbox";

const Line = () => {

  let boxes = [true, false, true, false]
  let length = [...boxes]
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