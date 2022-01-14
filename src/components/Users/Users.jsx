import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import s from './Users.module.css'

let Users = ({currentPage, onPageChanged, totalUserCount, pageSize, users, ...props}) => {
    return <div className={s.users}>
        <div className={'m-2'}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUserCount} pageSize={pageSize}/>
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