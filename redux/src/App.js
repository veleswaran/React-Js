import { Provider } from 'react-redux';
import store from './Reduz/Store';
import './App.css';
import Show from './Reduz/Show'

function App() {
  return (
    <Provider store={store}>
      <Show/>
    </Provider>
     
   
  );
}

export default App;
