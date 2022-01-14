import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormControls/FormsControls";
import {Button} from "primereact/button";

const maxLength10 = maxLengthCreater(10)

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field className={s.textarea} name={'newPostText'} component={Textarea}
                   validate={[required, maxLength10]}/>
            {/*<InputTextarea className={'m-2'} name={'newPostText'} rows={2} cols={62}*/}
            {/*               value={props.value} ref={props.ref}*/}
            {/*               onChange={props.onChange} autoResize/>*/}
        </div>
        <div>
            <Button label='Add post' onClick={props.onClick}
                    className='p-button-secondary m-1 p-1'/>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {

    let postsElement =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likescount={p.likescount} key={p.id}/>);
    let newPostElement = React.createRef();
    //let newPostElement = useRef(null);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <div className={'px-6 shadow-8'}>MY POSTS</div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
});

export default MyPosts;