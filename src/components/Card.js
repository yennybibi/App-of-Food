import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, name, image, rating, liked, handleRatingChange, handleLikeClick }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-title">{name}</h2>
      <div className="card-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${rating >= value ? 'filled' : ''}`}
            onClick={() => handleRatingChange(id, value)}
          >
            ★
          </span>
        ))}
      </div>
      <button className={`like-button ${liked ? 'liked' : ''}`} onClick={() => handleLikeClick(id)}>
        Me gusta
      </button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleLikeClick: PropTypes.func.isRequired,
};

export default Card;
