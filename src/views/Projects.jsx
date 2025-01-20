import React, { useContext } from "react";
import { Card, Card1, Card2, Card3, Card4, Card5 } from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 gap-4 justify-items-center ">
          <Card />
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
        </div>
      </div>
    </div>
  );
};

export default Projects;
