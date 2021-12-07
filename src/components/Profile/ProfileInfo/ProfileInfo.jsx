import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.imageprofile}>
                <img src='https://i.pinimg.com/originals/a5/ce/e1/a5cee1f163afd59eb92044e46a263f08.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;