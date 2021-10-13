import { Provider } from 'react-redux'

import './App.css';
// Importerer her CharactersContainer fra eksempel 1
import { CharactersContainer } from './CharactersContainer';
import { StarshipsContainer } from './StarshipsContainer';
import { store } from './state3';

const App = () => (
  <div className="App">
    <main>
      <Provider store={store}>
        <CharactersContainer />
        <StarshipsContainer />
      </Provider>
    </main>
  </div>
);

export default App;
