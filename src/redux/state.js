const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likescount: 15},
                {id: 2, message: 'It\'s my first post', likescount: 20},
                {id: 3, message: 'LOL', likescount: 4},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Dasha"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Denis"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Hay"},
            ],
            newMessageBody: ""
        },
        sitebar: {}
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель(observer)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likescount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreater = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreater = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreater = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default store;

