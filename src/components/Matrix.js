import Voice from "./Voice"
import { useContext, useEffect } from "react"
import { Context } from '../contexts/Context'
import CustomVoice from './CustomVoice'

const Matrix = () => {
  
  const context = useContext(Context)

  useEffect(() => {
    for (let voice = 0; voice < 2; voice++) {
      let voiceData = []
      for (let beat = 0; beat < 16; beat++) {
        let status = Math.round(Math.random())
        voiceData.push(status)
      }
      context.state.voices.push(voiceData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    context.setState({ voices: context.state.voices })}, [])
  
  if (context && context.state && context.state.voices) {
    let voices = context.state.voices.map((voice, i) => {

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

    if (context.state.customVoices) {
      let customVoices = context.state.customVoices.map((voice, i) => {

        let voiceId = i

        return (
          <div key={voiceId}>
            <CustomVoice
              key={voiceId}
              voiceId={voiceId}
              boxes={voice}
            />
          </div>
        )
      })
      voices.push(customVoices)
    }
    return voices.flat()
  };

}
 
export default Matrix;