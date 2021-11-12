import s from './Post.module.css'
import { Avatar } from 'primereact/avatar';

const Post = (props) => {
    //debugger;
    return (
        <div className={s.item}>
            <Avatar image="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" size="large"/>
            {/*<img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>*/}
            {props.message}
            <div>
                <span>like</span> {props.likescount}
            </div>
        </div>
    )
}

export default Post;