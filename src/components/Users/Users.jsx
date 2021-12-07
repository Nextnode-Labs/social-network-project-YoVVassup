import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {Button} from 'primereact/button';
import {NavLink} from "react-router-dom";


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
                                ? <Button label='Unfollow' onClick={() => (props.unfollow(u.id))}
                                          className='p-button-secondary m-1 p-1'/>
                                : <Button label='Follow' onClick={() => (props.follow(u.id))}
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