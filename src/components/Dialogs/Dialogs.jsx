import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} /> );
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={`${s.dialogs}`}>
            <div className={'grid mt-0'}>
                <div className={`${s.dialogsItems} ${s.item}` + ' col mx-1 font-bold font-italic'}>
                    {dialogsElements}
                </div>
                <div className={`${s.messages}` + ' col mx-1 py-1'}>
                    <div>{messagesElements}</div>
                </div>
            </div>
            <div className={'grid mt-2'}>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


export default Dialogs;

