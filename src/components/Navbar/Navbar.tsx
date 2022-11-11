import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar bg-warning ">
            <div className="container-fluid p-2 ">
                <a className="navbar-brand">
                    <img src="https://findicons.com/files/icons/1994/vista_style_business_and_data/128/users.png" alt="Logo" width="45" height="auto"
                         className="d-inline-block align-text-top mx-5" />
                    Users
                </a>
            </div>
        </nav>
    );
};

export default Navbar;