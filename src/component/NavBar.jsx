import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Movies from './movies';
import Customers from './customer';

class Navbar extends Component {
  state = {};
 
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <div className="container-fluid">
          <NavLink to="/" className="nav-item p-2">
            Vidly
          </NavLink>
          <NavLink  to="/movies" className="nav-item p-2">
            Movies
          </NavLink>
          <NavLink  to="/customer" className="nav-item p-2" element={<Customers />}>
            Customers
          </NavLink>
          <NavLink  to="/rentals" className="nav-item p-2">
            Rentals
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
