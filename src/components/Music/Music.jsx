import React from 'react'
import s from './Music.module.css'
import {Redirect} from "react-router-dom";

const Music = (props) => {
    //if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.music}>
            Music
        </div>
    )
}

export default Music;