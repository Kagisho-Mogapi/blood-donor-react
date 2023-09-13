import logo from './logo.svg';
import './App.css';
import { store } from './Actions/Store';
import { Provider } from 'react-redux';
import Candidate from './Components/Candidate';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Provider store = {store}>
      <Container maxWidth="lg">
        <Candidate />
      </Container>
    </Provider>
  );
}

export default App;
