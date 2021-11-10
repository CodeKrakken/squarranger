import { Context } from '../contexts/Context'
import { useContext } from 'react' 

const Extend = () => {
  
  const context = useContext(Context)

  console.log(context)

  const handleSubmit = (e) => {
    
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