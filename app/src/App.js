import { Provider } from 'react-redux'
import { createStore } from 'redux';


import './App.css';
import { rootReducer } from './state';
import { Characters } from './Characters';

const store = createStore(rootReducer);

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
