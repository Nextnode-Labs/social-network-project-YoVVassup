import React from 'react'
import s from './Settings.module.css'
import {Redirect} from "react-router-dom";

const Settings = (props) => {
    //if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.settings}>
            Settings
        </div>
    )
}

export default Settings;