import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreater, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormControls/FormsControls";

const maxLength50 = maxLengthCreater(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div className='pt-3'>
            <Field component={Textarea}
                   name={'newMessageBody'}
                   validate={[required, maxLength50]}
                   placeholder={'Enter your message...'}/>
            {/*<InputTextarea rows={2} cols={62}*/}
            {/*               value={newMessageBody}*/}
            {/*               onChange={onNewMessageChange} autoResize />*/}
        </div>
        <div>
            {/*<Button label='Send' onClick={ OnSendMessageClick } className='p-button-secondary m-1 p-1'/>*/}
            <button>Send</button>
            <button>Remove</button>
            {/*<Button label='Remove' className='p-button-secondary m-1 p-1'/>*/}
        </div>
    </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)
