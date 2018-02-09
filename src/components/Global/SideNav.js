import React from 'react';

import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';
// Assets

import './css/Header.css';
import logo from '../../img/webpoint.png';

const SideNav = (props) => {

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand><a href="#brand"><img className="LogoNav" src={ logo } alt="Logo WebPoint" /></a></Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Inicio</NavItem>
                    <NavItem eventKey={2} href="#">WebPointWiFi</NavItem>
                    <NavItem eventKey={1} href="#">SafePoint</NavItem>
                    <NavItem eventKey={2} href="http://facebook.com">Contacto</NavItem>
                    <NavDropdown eventKey={3} title="Perfil" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Iniciar Sesion</MenuItem>
                        <MenuItem eventKey={3.2}>Registrarse</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>About</MenuItem>
                    </NavDropdown>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
}

export default SideNav;