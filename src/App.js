import Matrix from "./components/Matrix";
import Play from "./components/Play";
import ContextProvider from './contexts/Context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Matrix />
        <Play />
      </ContextProvider>
    </div>
  );
}

export default App;
