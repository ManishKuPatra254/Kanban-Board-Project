
import './App.css';
import {Home} from './Home/Home';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Home />
    </div>
    </Provider>
  );
}

export default App;
