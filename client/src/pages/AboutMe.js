import React from "react";
import TempImage from "../assets/ID_logo192_circular.png";
import TechIcons from "../components/TechIcons";

const AboutMe = () => {
  return (
    <div className="row container">
      <div className="infoCardHeader">About Me</div>
      <div className="infoCard row">
        <div className="col s6 ProfileImage">
          <img src={TempImage} alt="" className="Image align-left" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit
          minus distinctio? Fuga amet libero possimus facilis, eaque,
          consequuntur quos explicabo commodi consectetur quisquam error vero
          blanditiis qui! Iusto voluptate possimus dolorum beatae harum aliquid
          autem illo tenetur ducimus deleniti accusantium perferendis
          repudiandae, illum soluta, molestiae, consectetur reprehenderit
          adipisci cum consequatur? Similique quisquam tempore incidunt sequi ab
          quo sunt. Aut deserunt adipisci sed iusto quisquam impedit magnam eius
          consectetur! Natus repellendus magni repellat hic nostrum rem beatae,{" "}
        </p>
        <p>
          aut vero facilis temporibus explicabo facere non labore illo ex qui
          accusantium id odio laborum porro maxime molestiae cupiditate cumque.
          Sunt, repellendus. Cupiditate vitae quaerat veniam facere at, nisi
          assumenda repudiandae dolore a, sapiente excepturi nemo, ipsa fugiat
          minus molestias dolorum expedita fugit!{" "}
        </p>
        <p>
          Quisquam nobis est nisi corrupti aliquid illum possimus explicabo
          totam dolores vitae dicta distinctio fuga quis autem ullam, temporibus
          in tempore repudiandae odit officiis eveniet animi? Laboriosam maiores
          perferendis illum eveniet repellat expedita ipsa quasi corporis magni
          praesentium quo beatae, odit in unde veritatis ducimus dolore dolores
          mollitia eligendi modi! Dolorem veniam molestiae dolores magni facere,
          voluptas amet quod a reprehenderit, hic nisi ut fugiat asperiores.
          Amet consequatur illum eaque a rem ut optio impedit nemo, qui ea
          officiis itaque.
        </p>
      </div>
      <TechIcons />
    </div>
  );
};

export default AboutMe;
