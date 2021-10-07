import { Provider } from 'react-redux'

import './App.css';
import { store } from './state';
import { Characters } from './Characters';


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
