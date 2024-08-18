import React from 'react';
import Link from 'next/link';
const NotFoundPage: React.FC = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <h2 className="text-3xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
      <p className="text-lg text-gray-500 mt-2">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href='/'
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
