import React, { useState } from "react";
import { Icon } from "@iconify/react";
import handlebarsIcon from "../etcassets/HandlebarsIconWhite.png";
import mongoose from "../etcassets/mongoosewhite1.png";


function Skills() {
  // skills icons
  const skillIcons = [
    {
      name: "HTML",
      src: "icomoon-free:html-five2",
      alt: "HTML",
    },
    {
      name: "CSS",
      src: "cib:css3-shiled",
      alt: "CSS",
    },
    {
      name: "JavaScript",
      src: "akar-icons:javascript-fill",
      alt: "JavaScript",
    },
    {
      name: "Git",
      src: "bxl:git",
      alt: "Git",
    },
    {
      name: "Node.Js",
      src: "fa-brands:node",
      alt: "Node.Js",
    },
    {
      name: "Express.js",
      src: "simple-icons:express",
      alt: "Express.js",
    },
    {
      name: "React",
      src: "akar-icons:react-fill",
      alt: "React",
    },
    {
      name: "Bootstrap",
      src: "akar-icons:bootstrap-fill",
      alt: "Bootstrap",
    },
    {
      name: "MySQL",
      src: "fontisto:mysql",
      alt: "MySQL",
    },
    {
      name: "Sequelize",
      src: "file-icons:sequelize",
      alt: "Sequelize",
    },
    {
      name: "MongoDB",
      src: "bxl:mongodb",
      alt: "MongoDB",
    },
    {
      name: "jQuery",
      src: "bxl:jquery",
      alt: "jQuery",
    },
    {
      name: "Heroku",
      src: "bxl:heroku",
      alt: "Heroku",
    },
    {
      name: "API",
      src: "carbon:api",
      alt: "API",
    },
    {
      name: "REST API",
      src: "dashicons:rest-api",
      alt: "REST API",
    },
  ];



  return (
    // resume section
        <section>

      {/* skills section */}
      <div>
        {/* iconify icons */}
        <div className="row p-4">
    
          {skillIcons.map((icon) => (
            <div
              className="col-xm-12 col-sm-6 col-md-4 col-lg-2"
              key={icon.name}
            >
              <Icon icon={icon.src} color="#white" width="75" height="75" />
              <h5 className="skills">{icon.name}</h5>
            </div>
          ))}
          {/* additional icons */}
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-2">
            <img
              src={handlebarsIcon}
              alt="handlebars"
              style={{ color:"#white", width: "76px" }}
            ></img>
            <h5 className="skills">Handlebars</h5>
          </div>
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-2">
            <img src={mongoose} alt="mongoose" style={{ color:"#white", width: "76px" }}></img>
            <h5 className="skills">Mongoose</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;