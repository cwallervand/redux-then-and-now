// https://redux.js.org/tutorials/fundamentals/part-1-overview
import { Provider } from 'react-redux'

import './App.css';
import { store } from './state';
import { CharactersContainer } from './CharactersContainer';

const App = () => (
  <div className="App">
    <main>
      <Provider store={store}>
        <CharactersContainer />
      </Provider>
    </main>
  </div>
);

export default App;
