import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import {Button} from 'primereact/button';
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} /> );
    let messagesElements = state.messages.map(m => <MessageItem message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;

    let OnSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
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
                <div>
                    <div className='pt-3'>
                        <InputTextarea rows={2} cols={62}
                                       value={newMessageBody}
                                       onChange={onNewMessageChange} autoResize />
                    </div>
                    <div>
                        <Button label='Send' onClick={ OnSendMessageClick } className='p-button-secondary m-1 p-1'/>
                        <Button label='Remove' className='p-button-secondary m-1 p-1'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

