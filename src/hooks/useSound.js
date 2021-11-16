import useSound from 'use-sound'
import { useEffect } from 'react'

const useSample = (sound) => {
  
  const [play] = useSound(sound)
  
  useEffect(() => {
    console.log(sound)
    play()
  }, [])

  return (null);
}
 
export default useSample;