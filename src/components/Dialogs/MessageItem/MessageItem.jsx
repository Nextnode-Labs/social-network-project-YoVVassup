import s from './MessageItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
    )
}

const MessageItem = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const MessageItem = (props) => {

    let dialogs = [
        {id:1, name:"Dima"},
        {id:2, name:"Andrey"},
        {id:3, name:"Dasha"},
        {id:4, name:"Sasha"},
        {id:5, name:"Denis"},
    ]

    let messages = [
        {id:1, message:"Hi"},
        {id:2, message:"How is it-kamasutra?"},
        {id:3, message:"Yo"},
        {id:4, message:"Hay"},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map(m => <MessageItem message={m.message} id={m.id}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default MessageItem;

