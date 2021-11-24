import React from 'react'
import s from './Header.module.css'
import { Avatar } from 'primereact/avatar';

const Header = () => {
    return <header className={s.header}>
        <Avatar image="https://static.wikia.nocookie.net/cnc/images/3/34/CNCTA_Forgotten.jpg" size="large" />
        {/*<img src='https://static.wikia.nocookie.net/cnc/images/3/34/CNCTA_Forgotten.jpg'/>*/}
    </header>
}

export default Header;