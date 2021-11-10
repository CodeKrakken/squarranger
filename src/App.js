import Matrix from "./components/Matrix";
import Play from "./components/Play";
import Extend from './components/Extend';
import ContextProvider from './contexts/Context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Matrix />
        <Play />
        <Extend />
      </ContextProvider>
    </div>
  );
}

export default App;
