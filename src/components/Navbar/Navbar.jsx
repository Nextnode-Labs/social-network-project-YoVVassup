import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={"/profiles"} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to={"/dialogs"} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/news"} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/music"} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/users"} activeClassName={s.activeLink}>Find Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/settings"} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;