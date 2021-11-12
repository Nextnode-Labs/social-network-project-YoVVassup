import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import { InputTextarea } from 'primereact/inputtextarea';
import { sendMessageCreater, updateNewMessageBodyCreater } from "../../redux/state";
import {Button} from "primereact/button";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = state.messages.map(m => <MessageItem message={m.message} /> );
    let newMessageBody = state.newMessageBody;

    let OnSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreater(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <InputTextarea rows={2} cols={62}
                                       value={newMessageBody}
                                       onChange={onNewMessageChange} autoResize />
                    </div>
                    <div>
                        <Button label="Send" onClick={ OnSendMessageClick } className="p-button-secondary p-m-1 p-p-1 p-m-lg-1 p-b-lg-3"/>
                        <Button label="Remove" className="p-button-secondary p-m-1 p-p-1 p-m-lg-1 p-b-lg-3"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

