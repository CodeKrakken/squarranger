import { useState, useContext } from "react";

const Checkbox = (data) => {
  console.log(data)

  const [status, setStatus] = useState(data.checked)

  return (
    <input type="checkbox" defaultChecked={data.checked} onChange={e => {
      setStatus(e.target.checked);
    }} />
  );
}
 
export default Checkbox;