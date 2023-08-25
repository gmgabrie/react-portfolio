import React from "react";
import profileImage from "../../assets/cover/Glennsmall.png";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img
            className="aboutPic"
            src={profileImage}
            alt="profile image"
          ></img>
          {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p>
          {" "}
          I am a currently a full time Technical Escalation Manager for a large
          company in the Casino Gaming industry. I am also a husband and father
          to my 8 year old daughter. Outside of web application development, I
          enjoy spending time with my family, playing tennis and being outside
          in nature. I am looking for additional career options that can utilize
          my technical, problem-solving and creative abilities. Please take a
          look at my portfolio of work projects below.
        </p>
        <p></p>
      </div>
    </section>
  );
}

export default About;
