import React from "react";
import s from './Users.module.css'
import {Button} from 'primereact/button';
import {Avatar} from 'primereact/avatar';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) { //.this

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                });
        }
    }

    render() {
        return <div>
            <Button label="Get Users" onClick={this.getUsers} className="p-button-secondary m-2 p-1"/>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className="grid flex justify-content-start my-0 mx-1" style={{width: '500px'}}>
                        <div className="col-fixed" style={{width: '120px'}}>
                            <div className="flex justify-content-center">
                                {/*<Avatar src={u.photoUrl} className={s.userPhoto} size="xlarge"/>*/}
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </div>
                            <div className="flex justify-content-center">
                                {u.followed
                                    ? <Button label="Unfollow" onClick={() => (this.props.unfollow(u.id))}
                                              className="p-button-secondary m-1 p-1"/>
                                    : <Button label="Follow" onClick={() => (this.props.follow(u.id))}
                                              className="p-button-secondary m-1 p-1"/>}
                            </div>
                        </div>
                        <div className="col">
                    <span className="flex-row">
                        <div className="flex">
                            {u.name}
                        </div>
                        <div className="flex py-3">
                            {u.status}
                        </div>
                    </span>
                            <span className="col flex flex-column">
                        <div className="flex justify-content-end">
                            {"u.location.country"}
                        </div>
                        <div className="flex justify-content-end">
                            {"u.location.city"}
                        </div>
                    </span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}


export default Users;