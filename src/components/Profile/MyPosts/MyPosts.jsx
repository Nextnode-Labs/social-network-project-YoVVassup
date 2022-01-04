import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Button } from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormControls/FormsControls";

const maxLength10 = maxLengthCreater(10)

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} component={Textarea}
                   validate={[required, maxLength10]}/>
            {/*<InputTextarea rows={2} cols={62} value={props.value}*/}
            {/*               ref={props.ref}*/}
            {/*               onChange={props.onChange} autoResize/>*/}
        </div>
        <div>
            {/*<Button label='Add post' onClick={props.onClick}*/}
            {/*        className='p-button-secondary m-1 p-1'/>*/}
            {/*<Button label='Remove'*/}
            {/*        className='p-button-secondary m-1 p-1'/>*/}
            <button>Add post</button>
            <button>Remove</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {

    let postsElement = props.posts.map( p => <Post  message={p.message} likescount={p.likescount} key={p.id}/>);
    //let newPostElement = React.createRef();
    let newPostElement = useRef(null);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;