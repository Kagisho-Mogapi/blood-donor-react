import logo from './logo.svg';
import './App.css';
import { store } from './Actions/Store';
import { Provider } from 'react-redux';
import Candidate from './Components/Candidate';

function App() {
  return (
    <Provider store = {store}>
      <Candidate />
    </Provider>
  );
}

export default App;
