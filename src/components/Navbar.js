import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material'
import { Link } from 'react-router-dom';

const NavBar = styled(AppBar)`
    background: #111111;
`;

const NavItem = styled(Toolbar)`
    font-size: 25px;
    & > a {
        margin-right: 20px;
        color: inherit;
        text-decoration: none;
    }
`;

const Navbar = () => {
  return (
    <NavBar position="static">
        <NavItem>
            <Link to='/'>Home</Link>
            <Link to='/add'>Add-User</Link>
            <Link to='/all'>All-Users</Link>
        </NavItem>
    </NavBar>
  )
}

export default Navbar
