const Checkbox = (data) => {
  console.log(data)

  return (
    <input type="checkbox" defaultChecked={data.checked} />
  );
}
 
export default Checkbox;