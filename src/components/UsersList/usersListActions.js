import { getUsers, getUsersPosts } from '../../app/api';

export const retrieveUsers = _ =>
    (dispatch) => {
        getUsers().then(res => {
        dispatch(updateUsersList(res));
    });
};

export const updateUsersList = res => {
    return {
        type: 'UPDATE_USERS_LIST',
        users: res
    };
};

export const retrieveUsersPosts = _ =>
    (dispatch) => {
        getUsersPosts().then(res => {
        dispatch(updateUsersPosts(res));
    });
};

export const updateUsersPosts = res => {
    return {
        type: 'SET_USERS_POSTS',
        posts: res
    };
};

export const setCurrentPage = page => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage: page
    };
};