import React from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';

function Navbar() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        О нас
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Связь с нами
                    </NavLink>
                    <NavLink to='/real-estate' activeStyle>
                        Недвижимость
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Войти
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;