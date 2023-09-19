import logo from './logo.svg';
import './App.css';
import { store } from './Actions/Store';
import { Provider } from 'react-redux';
import Candidate from './Components/Candidate';
import { Container } from '@material-ui/core';
import {ToastProvider} from "react-toast-notifications"

export {ToastProvider}

function App() {
  return (
    <Provider store = {store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">
          <Candidate />
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
