import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/logodark.svg';
import sun from '../../assets/img/sunmode.svg';
import sunwhite from '../../assets/img/sunwhite.svg'


const Header = ({ onToggleDarkMode, darkMode }) => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="logo" />
            <img src={`${!darkMode? sun : sunwhite}`} alt="sun" onClick={onToggleDarkMode} className={darkMode ? styles.sunDark : ""} />
        </div>
    );
};

export default Header;
