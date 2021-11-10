import { Context } from '../contexts/Context'
import { useContext } from 'react' 

const Extend = () => {
  
  const context = useContext(Context)

  console.log(context)

  const handleSubmit = (e) => {

    for (let i = 0; i < context.state.lines.length; i++) {
      context.state.lines[i].push(false)
    }
    context.setState({ lines: context.state.lines })

  }
  
  
  return context ? ( 
    <button
      onClick={handleSubmit}
    >
      +
    </button>
   ) : '';
}
 
export default Extend;