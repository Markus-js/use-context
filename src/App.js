import {AppContextProvider} from './context/Context';
import Child from './components/Child';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Child />
      </div>
    </AppContextProvider>
  );
}

export default App;
