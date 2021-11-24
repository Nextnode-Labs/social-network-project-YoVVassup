import React from "react";
import s from './Users.module.css'
import { Button } from 'primereact/button';


let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://avatarko.ru/img/kartinka/11/multfilm_Gubka_Bob_10025.jpg',
                followed: true,
                fullName: 'Andrew',
                status: '...frustration',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://avatarko.ru/img/kartinka/31/devushka_30063.jpg',
                followed: false,
                fullName: 'Masha',
                status: 'LOL',
                location: {city: 'Moscow', country: 'Russian'}
            },
            {
                id: 4,
                photoUrl: 'https://www.meme-arsenal.com/memes/da50442161df4d3d58a50ae2901f6e64.jpg',
                followed: true,
                fullName: 'Shan',
                status: 'I do not understand...',
                location: {city: 'Beijing', country: 'China'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className="grid flex justify-content-start my-0 mx-1" style={{width: '500px'}}>
                    <div className="col-fixed" style={{width: '120px'}}>
                        <div className="flex">
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div className="flex justify-content-center">
                            {u.followed
                                ? <Button label="Unfollow" onClick={() => (props.unfollow(u.id))} className="p-button-secondary m-1 p-1" />
                                : <Button label="Follow" onClick={() => (props.follow(u.id))} className="p-button-secondary m-1 p-1" />}
                        </div>
                    </div>
                    <div className="col">
                    <span className="flex-row">
                        <div className="flex">
                            {u.fullName}
                        </div>
                        <div className="flex py-3">
                            {u.status}
                        </div>
                    </span>
                    <span className="col flex flex-column">
                        <div className="flex justify-content-end">
                            {u.location.country}
                        </div>
                        <div className="flex justify-content-end">
                            {u.location.city}
                        </div>
                    </span>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;