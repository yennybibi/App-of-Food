import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css'; // Importa el archivo de estilos CSS para la paginación

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button className="page-button" onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button className="page-button" onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

