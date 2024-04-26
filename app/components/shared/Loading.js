"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../lib/features/loading';

const Loading = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading && (
        <div className="loading-overlay">
          <span className="spinner"></span>
        </div>
      )}
    </div>
  );
};

export default Loading;
