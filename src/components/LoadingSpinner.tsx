import React from 'react';
import 'src/styles/LoadingSpinner.css';

const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <svg className="circular">
      <circle className="circle-path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  </div>
);

export default LoadingSpinner;
