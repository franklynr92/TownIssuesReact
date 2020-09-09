import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    marigin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}
const Navbar = () => {
    return (<div> 
        <NavLink
        to ="/"
        exact
        style={link}
        activeStyle={{
          background:'darkblue'
        }}>Home</NavLink>
        <NavLink
        to="/categories"
        exact
        style={link}
        activeStyle={{
          background:'darkblue'
        }}>Category</NavLink>
        <NavLink
        to="/issues"
        exact
        style={link}
        activeStyle={{
          background:'darkblue'
        }}>Issue</NavLink>
        </div>  );
}
 
export default Navbar;