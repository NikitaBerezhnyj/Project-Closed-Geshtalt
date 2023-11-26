import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loader.css'; // Заміни це на шлях до твого CSS файлу

const LoaderComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loader">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      <YourAppContent />
    </>
  );
};

const YourAppContent = () => {
  // Тут твій основний контент
  return (
    <div></div>
  );
};

export default LoaderComponent;
