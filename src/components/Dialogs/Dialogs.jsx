import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import {Button} from 'primereact/button';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} /> );
    let messagesElements = state.messages.map(m => <MessageItem message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    //className={`${s.item}
    return (
        <div className={`${s.dialogs}` + ' grid mt-0'}>
            <div className={`${s.dialogsItems} ${s.item}` + ' col mx-1 font-bold font-italic'}>
                {dialogsElements}
            </div>
            <div className={`${s.messages}` + ' col mx-1 py-1'}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;

