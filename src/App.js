import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts/Posts"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import store from "./store/store"


function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <Posts/>

    </div>
    </Provider>
  );
}

export default App;
