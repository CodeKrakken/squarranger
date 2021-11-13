import Matrix from "./components/Matrix";
import Play from "./components/Play";
import ExtendTrack from './components/ExtendTrack';
import ContextProvider from './contexts/Context'
import AddVoice from "./components/AddVoice";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Matrix />
        <ExtendTrack style={{display: 'inline'}} />
        <AddVoice style={{display: 'inline'}} />
        <Play />
      </ContextProvider>
    </div>
  );
}

export default App;
