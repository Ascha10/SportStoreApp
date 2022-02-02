import './App.css';
import { StoreProvider } from './Context/StoreProvider';
import RouterApp from './Router/RouterApp';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <RouterApp/>
      </StoreProvider>
    </div>
  );
}

export default App;
