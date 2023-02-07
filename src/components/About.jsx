import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Extensive usage of JavaScript, React Js, Node Js, Bootstrap, Tailwind, Material UI, JQuery/AJAX, JSON,HTML5, CSS3.
        Developed certain features of the application functionality i.e. CRUD(Create, Read, Update, Delete) and responsive
        design.
        
        
        </p>

        <br />

        <p className="text-xl">
        Environment: Html 5, CSS 3, LESS, SASS, JavaScript, ES6, React JS, Axios, GraphQL, NODE JS, Mongo DB,
        Express JS, JSON, XML, AWS, NPM, Visual Studio Code.
        </p>
      </div>
    </div>
  );
};

export default About;
