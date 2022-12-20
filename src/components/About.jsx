import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-red-600 to-blue-600 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am currently in my pre-final year of pursuing a Btech in Computer Science from KIIT University.
          I am passionate about building excellent software that improves
          the lives of those around me.
          I am interested in and have worked on full-stack projects using React. Apart from web development, I have also worked
          in the area of Python and machine learning. Recently, I have started to work on cloud technologies and tools.
          I am open to working on and collaborating on projects.
        </p>
        
        <br />
          

       

      </div>

      
    </div>
  );
};

export default About;
