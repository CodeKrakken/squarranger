import Matrix from "./components/Matrix";
import Play from "./components/Play";
import ExtendTrack from './components/ExtendTrack';
import ContextProvider from './contexts/Context'
import AddVoice from "./components/AddVoice";
import React from 'react';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <ExtendTrack style={{display: 'inline'}} />
        <AddVoice style={{display: 'inline'}} />
        <Play />
        <Matrix />
      </ContextProvider>
    </div>
  );
}

export default App;
