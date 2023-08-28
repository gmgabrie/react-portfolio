import React from "react";
import badgeImage from "../../assets/cover/UCF_badge.png";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          Download my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1158VU0J1J_KHFxeVgq0YqlOD3YfGAjCf/view?usp=sharing/"
          >
            resume
          </a>
        </p>
        <div className="badge-img my-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.badgr.io/public/assertions/4aYWvcSFTcCk8nXHUQMwgA?identity__email=ggabriel420%40gmail.com"
          >
            <img className="badgePic" src={badgeImage} alt="badge"></img>
          </a>
        </div>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
