import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

import { Button } from 'primereact/button';
import {InputTextarea} from "primereact/inputtextarea";


const MyPosts = (props) => {

    let postsElement = props.posts.map( p => <Post  message={p.message} likescount={p.likescount} />);
    //let newPostElement = React.createRef();
    let newPostElement = useRef(null);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />*/}
                    <InputTextarea rows={2} cols={62} value={props.newPostText}
                               ref={newPostElement}
                               onChange={(e) => onPostChange(e.target.value)} autoResize />

                </div>
                <div>
                    <Button label="Add post" onClick={ onAddPost }
                            className="p-button-secondary m-1 p-1"/>
                    <Button label="Remove"
                            className="p-button-secondary m-1 p-1"/>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;