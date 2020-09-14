import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Container/Category'
import Navbar from './Stateless/Navbar'
import Home from './Home'
import Issue from './Container/Issue'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//add import {Root}
import reducer from './Redux/reducer/reducers'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <div>
        {/* add root*/}
        <Navbar />
        <Route path="/" component={Home}/>
        <Route path="/categories" component={Category}/>
        <Route path="/issues" component={Issue}/>
      </div>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
//https://youtu.be/eofpZPRUnP8
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
