import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/state";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likescount={p.likescount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreater(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <InputTextarea rows={2} cols={62} onChange={onPostChange} ref={newPostElement} value={props.newPostText} autoResize />
                </div>
                <div>
                    <Button label="Add post" onClick={ addPost } className="p-button-secondary p-m-1 p-p-1 p-m-lg-1 p-b-lg-3"/>
                    <Button label="Remove" className="p-button-secondary p-m-1 p-p-1 p-m-lg-1 p-b-lg-3"/>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;