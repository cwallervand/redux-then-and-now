import { Provider } from 'react-redux'

import './App.css';
import { CharactersContainer2 } from './CharactersContainer2';
import { store } from './state2';

const App = () => (
  <div className="App">
    <main>
      <Provider store={store}>
        <CharactersContainer2 />
      </Provider>
    </main>
  </div>
);


export default App;
