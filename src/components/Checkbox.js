import { useState, useContext } from "react";
import { Context } from '../contexts/Context'

const Checkbox = ({checked, index}) => {

  const context = useContext(Context)

  return (
    <input type="checkbox" defaultChecked={checked} onChange={e => {

      context.state.boxes[index-1] = !context.state.boxes[index-1]
      context.setState({ boxes: context.state.boxes })

    }} />
  );
}
 
export default Checkbox;