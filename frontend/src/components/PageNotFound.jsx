import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-400 to-orange-500 text-white text-center px-4">
      <div className="shadow-lg p-6 rounded-lg bg-opacity-80">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-base md:text-lg mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>
      <Link
        to="/"
        className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-md hover:bg-orange-100 transition mt-4"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
