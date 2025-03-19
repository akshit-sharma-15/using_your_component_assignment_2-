// LikeButton.jsx
import React, { useState } from 'react';
import '../App.css'; // Corrected import path

const LikeButton = ({ initialLiked }) => {
    const [liked, setLiked] = useState(initialLiked);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <button 
            onClick={toggleLike} 
            className={`like-button ${liked ? 'liked' : ''}`}
        >
            {liked ? 'Liked' : 'Like'}
        </button>
    );
};

export default LikeButton;