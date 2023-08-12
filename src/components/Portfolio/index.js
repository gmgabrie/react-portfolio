import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "project-1",
      description: "description",
      link: "link",
      repo: "link",
    },
    {
      name: "project-2",
      description: "description",
      link: "link",
      repo: "link",
    },
    {
      name: "project-3",
      description: "description",
      link: "link",
      repo: "link",
    },
    {
      name: "project-4",
      description: "description",
      link: "link",
      repo: "link",
    },
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
