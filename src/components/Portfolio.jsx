import React from "react";

import dynamic_weather from "../assets/portfolio/dynamic_weather.jpg";
import chat from "../assets/portfolio/chat.jpg";

import password_manager from "../assets/portfolio/password_manager.jpg"

import todo from "../assets/portfolio/todo.png"
import blog from "../assets/portfolio/blog.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dynamic_weather,
    },
    {
      id: 2,
      src: password_manager,
    },
    {
      id: 3,
      src: chat,
    },
    {
      id: 4,
      src: todo ,
    },
    {
      id: 5,
      src: blog,
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-blue-600 to-red-600 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
