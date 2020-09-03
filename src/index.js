import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Container/Category'
import Navbar from './Stateless/Navbar'
import Home from './Home'
import Issue from './Container/Issue'
import C from './Redux/constants'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar />
        <Route path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/issue" component={Issue}/>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
