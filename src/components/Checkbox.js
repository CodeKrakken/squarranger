const Checkbox = (data) => {
  console.log(data)

  return (
    <input type="checkbox" defaultChecked={data.checked} onChange={e => {
      setBox(e.target.checked);
    }} />
  );
}
 
export default Checkbox;