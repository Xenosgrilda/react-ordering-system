import React from "react";
import './Header.css';
import navBrand from '../../../images/brand-logo.png';
import shoppingCart from '../../../images/shopping-car-icon.png';

export default function Header() {

    return(
        <nav className='navbar kabum-navbar'>
            <a href="/" className='navbar-brand'>
                <img src={navBrand} width="50" height="50" alt="K" />
                <span className='kabum-nav-title ml-3'>
                    My <strong>KaBuM</strong>
                </span>
            </a>

            <a href="/">
                <img src={shoppingCart} className='mr-3' alt="Carrinho" width="30" height="30"/>
            </a>
        </nav>
    )
}
