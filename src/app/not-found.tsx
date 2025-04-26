// pages/404.tsx

import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-6 animate-bounce">
        404
      </h1>
      <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
        Oops! The page you're looking for doesn't exist, but don't worry, you can always find your way home.
      </p>
      <Link
        href="/"
        className="text-lg font-semibold text-blue-500 hover:text-blue-400 transition-colors duration-300 transform hover:scale-105"
      >
        Go back to Home
      </Link>
      <div className="mt-12">
        <img
          src="https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1750896000&v=beta&t=fblYUKpkCWv7sAgz1kS7_a7oMZlVJxQ-G464m5HC0YM" // Replace with your custom 404 image or animation
          alt="404 illustration"
          className="rounded-full shadow-lg mt-6 animate-pulse"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default NotFound;
