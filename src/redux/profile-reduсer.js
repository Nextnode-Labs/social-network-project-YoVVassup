const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likescount: 15},
        {id: 2, message: 'It\'s my first post', likescount: 20},
        {id: 3, message: 'LOL', likescount: 4},
    ],
    newPostText: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likescount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreater = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;