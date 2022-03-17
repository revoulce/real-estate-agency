import React from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';

function Navbar() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/about'>
                        О нас
                    </NavLink>
                    <NavLink to='/contact'>
                        Связь с нами
                    </NavLink>
                    <NavLink to='/real-estate'>
                        Недвижимость
                    </NavLink>
                    <NavLink to='/sign-up'>
                        Войти
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;