import React from 'react'
import s from './News.module.css'
import {Redirect} from "react-router-dom";

const News = (props) => {
    //if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.news}>
            News
        </div>
    )
}

export default News;