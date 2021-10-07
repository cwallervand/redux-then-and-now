import { Provider } from 'react-redux'


import './App.css';
import { Characters } from './Characters2';
import { store } from './state2';

function App() {
  return (
    <div className="App">
      <main>
        <Provider store={store}>
          <Characters />
        </Provider>
      </main>
    </div>
  );
}

export default App;
