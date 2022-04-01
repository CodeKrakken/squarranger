import { useContext } from "react";
import { Context } from '../contexts/Context'
import React from 'react';


const AddSample = () => {

  const context = useContext(Context)

  console.log(context)
  const changeHandler = (event) => {

		context.state.soundBank.push(event.target.files[0]);
    context.setState({ voices: context.state.voices, sounds: context.state.sounds, soundBank: context.state.soundBank })

	};

  return (
    <div style={{display: 'inline', overflow: 'hidden'}}>
      <input type="file" name="file" onChange={changeHandler} />
    </div>
  );
}
 
export default AddSample;