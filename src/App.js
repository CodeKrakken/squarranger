import Matrix from "./components/Matrix";
import Play from "./components/Play";
import ExtendTrack from './components/ExtendTrack';
import ContextProvider from './contexts/Context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Matrix />
        <Play />
        <ExtendTrack />
      </ContextProvider>
    </div>
  );
}

export default App;
