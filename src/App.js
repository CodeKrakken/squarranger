import Line from "./components/Line";
import ContextProvider from './contexts/Context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Line />
      </ContextProvider>
    </div>
  );
}

export default App;
