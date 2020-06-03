import React, { useEffect } from "react";
import TempImage from "../assets/ID_logo192_circular.png";
import TechIcons from "../components/TechIcons";

const AboutMe = (props) => {
  useEffect(() => {
    props.setPath("/");
    console.log(props.curPath);
  });
  return (
    <div className="row container">
      <div className="infoCardHeader">
        <p className="aboutMeHeader">About Me</p>
      </div>
      <div className="infoCard row">
        <div className="col s6 ProfileImage">
          <img src={TempImage} alt="" className="Image align-left" />
        </div>

        <p className="mobileTextAdjust">
          In college while studying Physics I took one course on computer
          Programming. This was a freshman survey course; incredibly basic and
          the course I looked forward to the least that year. That following
          summer I ended up breaking my ankle, basically leaving me locked in my
          apartment for 3 months with nothing to do. I started to play around
          with different development technologies (Python originally), and
          immediately became hooked.
        </p>
        <div style={{ height: 8 }}></div>
        <p className="mobileTextAdjust">
          From there I spent endless hours reading, watching tutorials, and
          experimenting with different technologies and tools. This led to
          Javascript, and from there to React and Node.js. Even though
          Javascript is still primarily a front-end technology, I love the logic
          and problem solving inherent to backend work. That all left me with my
          latest undertaking, working towards a Java certification and hopefully
          in the near future being able to comfortably work with frameworks such
          as Spring.
        </p>
        <div style={{ height: 8 }}></div>
        <p className="mobileTextAdjust">
          What I love most about development is that there never comes a point
          in which you know everything. I've always loved learning. Whether
          that's Physics and cosmology, ancient history, or anything in between,
          I've always had a need to figure out how and why things work the way
          they do. I spent three hours reading about baby kangaroos this past
          weekend. An animal I'll almost surely never see, just because I found
          them fascinating{" "}
          <em>
            (Did you know they're only 2cm tall, and weigh less than a gram when
            they're born?!?!)
          </em>
          .
        </p>
      </div>
      <TechIcons />
    </div>
  );
};

export default AboutMe;
