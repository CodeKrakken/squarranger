import Voice from "./Voice"
import { useContext, useEffect } from "react"
import { Context } from '../contexts/Context'

const Matrix = () => {
  
  const context = useContext(Context)

  useEffect(() => {
    for (let voice = 0; voice < 2; voice++) {
      let voiceData = []
      for (let beat = 0; beat < 8; beat++) {
        let status = Math.round(Math.random())
        console.log(status)
        voiceData.push(status)
      }
      context.state.voices.push(voiceData)
    }
    console.log('Adding')
    context.setState({ voices: context.state.voices })
  }, [])
  
  return context && context.state && context.state.voices ? (
    context.state.voices.map((voice, i) => {

      let voiceId = i

      return (
        <div key={voiceId}>
          <Voice 
            key={voiceId}
            voiceId={voiceId}
            boxes={voice}
          />
        </div> 
      )
    })
  ) : '';
}
 
export default Matrix;