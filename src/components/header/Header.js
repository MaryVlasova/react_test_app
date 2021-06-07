import React from 'react';
import HeaderMenu from './HeaderMenu.js';

function Header () {
    return (
    <header className="p-3 bg-dark text-white">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <HeaderMenu />

                <div className="text-end">

                </div>
            </div>
        </div>
    </header>
    );
        
    
}

export default Header;