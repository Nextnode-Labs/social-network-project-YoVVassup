import profileReducer, {addPostActionCreator, deletePost} from "./profile-reduсer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likescount: 15},
        {id: 2, message: 'It\'s my first post', likescount: 20},
        {id: 3, message: 'LOL', likescount: 4},
    ]
}

test('length of posts should be incremented', () => {
    // 1.test data
    let action = addPostActionCreator('it-kamasutra.com');
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect (newState.posts.length).toBe(4);
});

test('message of posts should be correct', () => {
    // 1.test data
    let action = addPostActionCreator('it-kamasutra.com');
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect (newState.posts[3].message).toBe('it-kamasutra.com');
});

test('after deleting length of messages should be decrement', () => {
    // 1.test data
    let action = deletePost(1);
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect (newState.posts.length).toBe(2);
});

test('after deleting length shouldn\'be decrement if id is incorrect', () => {
    // 1.test data
    let action = deletePost(1000);
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect (newState.posts.length).toBe(3);
});


