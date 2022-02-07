import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setCurrentPage } from '../UsersList/usersListActions';

import './UserPostsStyles.scss';

function UserPosts() {
    const dispatch = useDispatch();
    const allUersPosts = useSelector(state => state.usersList.posts);
    const [userId, setUserId] = useState(0);
    const [userPosts, setUserPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setCurrentPage('POSTS'));
        setUserId(new URLSearchParams(window.location.search).get('userid'));
    }, []);

    useEffect(() => {
        const posts = allUersPosts.filter(post => {
           return post.userId == userId;
        });

        setUserPosts(posts)
    }, [userId]);

    return (
        <div className="userPosts">
            <div className="userPosts-form">
                {userPosts.map(post => {
                    return <p key={post.id}>
                        <b>{post.title}</b>
                        <div>{post.body}</div>
                    </p>
                })}
            </div>
            <Button variant="primary" onClick={() => {navigate(-1)}}>
                Back to User List
            </Button>
        </div>
    )
}

export default UserPosts;