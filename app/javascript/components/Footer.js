import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return(
      <>
      <footer id="footer">
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="apartmentnew">Add New Listing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="apartmentindex">Apartment Listings</NavLink>
        </NavItem>
      </Nav>
      </footer>
      </>
    )
  }
}

export default Footer