import React from "react";
import { Link } from "react-router";
import errorImage from "../../assets/404.jpg"; 

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <img src={errorImage} alt="404 Not Found" className="w-1/2 max-w-sm mb-6" />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="mb-6 text-gray-600">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
