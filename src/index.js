import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const link = {
  width: '100opx',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => 
<div> 
<NavLink
to ="/"
exact
style={link}
activeStyle={{
  background:'darkblue'
}}>Home</NavLink>
<NavLink
to="/category"
exact
style={link}
activeStyle={{
  background:'darkblue'
}}>Category</NavLink>
<NavLink
to="/issue"
exact
style={link}
activeStyle={{
  background:'darkblue'
}}>Issue</NavLink>
</div>


// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

const Category = () => {
  return (
    <div>
      <h1>This is my Category Component</h1>
    </div>
  )
}

const Issue =() => {
  return(
    <div>
      <h1>This is my Issue Component</h1>
    </div>
  )
}

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
