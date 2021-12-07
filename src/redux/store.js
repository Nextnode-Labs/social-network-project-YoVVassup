import profileReducer from './profile-reduсer';
import dialogsReducer from './dialogs-reduсer';
import sidebarReducer from './sidebar-reduсer';


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
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Dasha'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Denis'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Hay'},
            ],
            newMessageBody: ''
        },
        sitebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель(observer)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        }
};

export default store;

