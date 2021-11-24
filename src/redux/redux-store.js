import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduсer";
import dialogsReducer from "./dialogs-reduсer";
import sidebarReducer from "./sidebar-reduсer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;