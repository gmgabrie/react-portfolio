import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Gulpco",
      description: "MERN Full Stack E-Commerce",
      link: "https://gulpcodrinks-ad436ff6ec24.herokuapp.com/",
      repo: "https://github.com/josejrod07/ecommerce-project3",
    },
    {
      name: "WeatherWizard",
      description: "Server-side API",
      link: "https://gmgabrie.github.io/weather-wizard/",
      repo: "https://github.com/gmgabrie/weather-wizard",
    },
    // {
    //   name: "project-3",
    //   description: "description",
    //   link: "link",
    //   repo: "link",
    // },
    // {
    //   name: "project-4",
    //   description: "description",
    //   link: "link",
    //   repo: "link",
    // },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
