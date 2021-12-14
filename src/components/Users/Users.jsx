import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {Button} from 'primereact/button';
import {NavLink} from "react-router-dom";
import {Paginator} from 'primereact/paginator';
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {/*<Button label="Get Users" onClick={this.getUsers} className="p-button-secondary m-2 p-1"/>*/}
        <div>
            {pages.map(p => {
                return <span key={p.id}
                             className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className='grid flex justify-content-start my-0 mx-1' style={{width: '500px'}}>
                    <div className='col-fixed' style={{width: '120px'}}>
                        <div className='flex justify-content-center'>
                            {/*<Avatar src={u.photoUrl} className={s.userPhoto} size="xlarge"/>*/}
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div className='flex justify-content-center'>
                            {u.followed
                                ? <Button disabled={props.followingInProgress.some(id => id === u.id)} label='Unfollow' onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '369b1e2f-870b-436d-a6ca-6eb805dad9f5'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });
                                }}
                                          className='p-button-secondary m-1 p-1'/>
                                : <Button disabled={props.followingInProgress.some(id => id === u.id)} label='Follow' onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '369b1e2f-870b-436d-a6ca-6eb805dad9f5'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });

                                }}
                                          className='p-button-secondary m-1 p-1'/>}
                        </div>
                    </div>
                    <div className='col'>
                    <span className='flex-row'>
                        <div className='flex'>
                            {u.name}
                        </div>
                        <div className='flex py-3'>
                            {u.status}
                        </div>
                    </span>
                        <span className='col flex flex-column'>
                        <div className='flex justify-content-end'>
                            {'u.location.country'}
                        </div>
                        <div className='flex justify-content-end'>
                            {'u.location.city'}
                        </div>
                    </span>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;