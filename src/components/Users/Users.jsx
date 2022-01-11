import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUserCount, pageSize, users, ...props}) => {
    return <div>
        {/*<Button label="Get Users" onClick={this.requestUsers} className="p-button-secondary m-2 p-1"/>*/}
        <div>
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