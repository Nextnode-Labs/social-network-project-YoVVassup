import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {Button} from 'primereact/button';
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div className='grid flex justify-content-start my-0 mx-1' style={{width: '500px'}}>
                <div className='col-fixed' style={{width: '120px'}}>
                    <div className='flex justify-content-center'>
                        {/*<Avatar src={user.photoUrl} className={s.userPhoto} size="xlarge"/>*/}
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className='flex justify-content-center'>
                        {user.followed
                            ? <Button disabled={followingInProgress
                                .some(id => id === user.id)} label='Unfollow'
                                      onClick={() => {
                                          unfollow(user.id);
                                      }}
                                      className='p-button-secondary m-1 p-1'/>
                            : <Button disabled={followingInProgress
                                .some(id => id === user.id)} label='Follow'
                                      onClick={() => {
                                          follow(user.id);
                                      }}
                                      className='p-button-secondary m-1 p-1'/>}
                    </div>
                </div>
                <div className='col'>
                    <span className='flex-row'>
                        <div className='flex'>
                            {user.name}
                        </div>
                        <div className='flex py-3'>
                            {user.status}
                        </div>
                    </span>
                    <span className='col flex flex-column'>
                        <div className='flex justify-content-end'>
                            {'user.location.country'}
                        </div>
                        <div className='flex justify-content-end'>
                            {'user.location.city'}
                        </div>
                    </span>
                </div>
            </div>
        </div>)
}

export default User;