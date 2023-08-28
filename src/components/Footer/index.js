import React from "react";
import badgeImage from "../../assets/cover/UCF_badge.png";

function Footer() {
  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/gmgabrie",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/glenn-gabriel-3a209718/",
    },
  ];

  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
      <br />
      <br />
      <div className="badge-img">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.badgr.io/public/assertions/4aYWvcSFTcCk8nXHUQMwgA?identity__email=ggabriel420%40gmail.com"
        >
          <img className="badgePic2" src={badgeImage} alt="badge"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
