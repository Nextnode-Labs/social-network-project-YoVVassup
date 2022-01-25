import React from 'react'
import s from './Header.module.css'
import {Avatar} from 'primereact/avatar';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <Avatar image='https://static.wikia.nocookie.net/cnc/images/3/34/CNCTA_Forgotten.jpg' size='large' />
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;