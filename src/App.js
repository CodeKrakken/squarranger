import Line from "./components/Line";
import Play from "./components/Play";
import ContextProvider from './contexts/Context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Line />
        <Play />
      </ContextProvider>
    </div>
  );
}

export default App;
