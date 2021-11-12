import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div className={s.imageprofile}>
            <img src='https://i.pinimg.com/originals/a5/ce/e1/a5cee1f163afd59eb92044e46a263f08.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;