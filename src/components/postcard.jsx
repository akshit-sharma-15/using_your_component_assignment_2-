// PostCard.jsx
import React from 'react';
import LikeButton from './likebutton';
import '../App.css'; // Corrected import path

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <img src={post.profileImage} alt="Profile" />
            <div>
                <h3>{post.username}</h3>
                <p>{post.content}</p>
                <LikeButton initialLiked={post.isLiked} />
            </div>
        </div>
    );
};

export default PostCard;