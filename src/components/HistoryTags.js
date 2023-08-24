import React from 'react';
import './HistoryTags.css';


const HistoryTags = ({ history }) => {
  return (
    <div className="history-tags">
      {history.map((query, index) => (
        <span key={index} className="tag">
          {query}
        </span>
      ))}
    </div>
  );
};

export default HistoryTags;
