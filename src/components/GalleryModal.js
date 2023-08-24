import React from 'react';
import './GalleryModal.css';

const GalleryModal = ({ meal, closeModal }) => {
  return (
    <div className="gallery-modal-overlay" onClick={closeModal}>
      <div className="gallery-modal-content">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        {/* Additional images */}
        <div className="additional-images">
          {meal.strMealThumb2 && (
            <img src={meal.strMealThumb2} alt={`${meal.strMeal} - Image 2`} />
          )}
          {meal.strMealThumb3 && (
            <img src={meal.strMealThumb3} alt={`${meal.strMeal} - Image 3`} />
          )}
          {/* Add more additional images if available */}
        </div>
        <button className="close-button" onClick={(e) => e.stopPropagation() || closeModal()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
