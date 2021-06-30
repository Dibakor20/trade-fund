import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header_section">
                <div className="container">
                <div className="info">
                  <p className=""><i class="fas fa-phone-alt mr-3"></i>+1 2345678910</p>
                  <p className=""><i class="fas fa-envelope-open mr-3 ml-5"></i>info@fundednext.com</p>
                    </div>    
                </div>    
            </div>   
        </>
    );
};

export default Header;