import React from 'react'
import s from './Post.module.css'
import userPhoto from '../../../../assets/images/user.png';
import {Avatar} from 'primereact/avatar';


const Post = (props) => {

    return (
        <div className={`${s.item}` + ' p-2'}>
            <div>
                <Avatar image={userPhoto} size='large'/>
                <span className={'m-2'}>{props.message}</span>
            </div>
            <div className={''}>
                <span>like</span> {props.likescount}
            </div>
        </div>
    )
}

export default Post;