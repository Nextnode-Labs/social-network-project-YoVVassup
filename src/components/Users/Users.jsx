import React, {useEffect, useState} from 'react';
import Paginator from "../Common/Paginator/Paginator";
// import {Paginator} from 'primereact/paginator';
import User from "./User";
import s from './Users.module.css'

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div className={s.users}>
        <div className={`${s.paginator} m-2`}>
            <Paginator  currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        </div>
        <div>
            {
                users.map(u => <User user={u} key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}/>
                )
            }
        </div>
    </div>

}

export default Users;