import { Provider } from 'react-redux'


import './App.css';
import { Characters } from './Characters';
import { Starships } from './Starships';
import { store } from './state3';

function App() {
  return (
    <div className="App">
      <main>
        <Provider store={store}>
          <Characters />
          <Starships />
        </Provider>
      </main>
    </div>
  );
}

export default App;
