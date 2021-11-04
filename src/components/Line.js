import Checkbox from "./Checkbox";

const Line = () => {
  let length = [...Array(4)]
  let id = 0
  return (
    length.map(checkbox => {
      id ++
      return (
        <Checkbox key={id} />
      )
    })
  )
}
 
export default Line;