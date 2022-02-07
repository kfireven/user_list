const initialState = {
    users: [],
    posts: [],
    currentPage: ''
}

export const usersList = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USERS_LIST':
            return Object.assign({}, state, { users: action.users });
        case 'SET_USERS_POSTS':
            return Object.assign({}, state, { posts: action.posts });
        case 'SET_CURRENT_PAGE':
            return Object.assign({}, state, { currentPage: action.currentPage });
        default:
            return state;
    }
};