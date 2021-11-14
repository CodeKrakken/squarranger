import { useContext } from "react";
import { Context } from '../contexts/Context'


const AddSample = () => {

  const context = useContext(Context)

  const changeHandler = (event) => {

		context.sounds.push(event.target.files[0]);
    context.setState({ 
      voices:       context.state.voices,
      sounds: context.state.sounds
    })
	};

  return (
    <div style={{display: 'inline'}}>
      <input type="file" name="file" onChange={changeHandler} />
    </div>
  );
}
 
export default AddSample;