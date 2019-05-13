import React, {Component} from 'react'
import {NavLink as RRNavLink} from 'react-router-dom'
import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  Container
} from 'reactstrap'

import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Container>
          <Navbar expand='md' className='d-flex flex-row justify-content-between'>
            <NavbarBrand to='/' tag={RRNavLink}>News App</NavbarBrand>
            <div className='d-flex flex-row align-items-center'>
              <NavItem className='p-2'>
                <NavLink to='/' activeClassName='active' tag={RRNavLink}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/about' activeClassName='active' tag={RRNavLink}>About</NavLink>
              </NavItem>
            </div>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default Header
