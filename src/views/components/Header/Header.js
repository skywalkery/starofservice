import React from 'react';
import './Header.scss';

const Header = ({ title }) => {
    return (
        <div className="header">
            {title}
        </div>
    );
};

export default Header;
