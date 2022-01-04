const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreater = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;