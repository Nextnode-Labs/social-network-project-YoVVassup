import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreater, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormControls/FormsControls";
import {Button} from "primereact/button";
import s from './AddMessageForm.module.css'

const maxLength50 = maxLengthCreater(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div className='px-3'>
            <Field className={s.textboxArea}
                   component={Textarea}
                   name={'newMessageBody'}
                   validate={[required, maxLength50]}
                   placeholder={'Enter your message...'}/>
            {/*<InputTextarea rows={2} cols={62}*/}
            {/*               value={newMessageBody}*/}
            {/*               onChange={onNewMessageChange} autoResize />*/}
        </div>
        <div>
            <Button label='Send' onClick={props.onClick} className='p-button-secondary mt-1 mx-3 p-1'/>
        </div>
    </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)
