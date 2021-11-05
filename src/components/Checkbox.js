import { useState, useContext } from "react";
import { Context } from '../contexts/Context'

const Checkbox = (data) => {

  const context = useContext(Context)

  data.key && console.log(data)


  return (
    <input type="checkbox" defaultChecked={data.checked} onChange={e => {
      // setState(e.target.checked);
      // console.log(e.target.checked)
      context.setState(e.target.checked)
    }} />
  );
}
 
export default Checkbox;