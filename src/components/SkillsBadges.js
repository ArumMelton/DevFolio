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
      name: "Netlify",
      src: "simple-icons:netlify",
      alt: "Netlify",
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
    {
      name: "Flutter",
      src: "cib:flutter",
      alt: "flutter",
    },
    {
      name: "Handlebars",
      src: "simple-icons:handlebarsdotjs",
      alt: "abletonlive",
    },
    {
      name: "Firebase",
      src: "bxl:firebase",
      alt: "firebase",
    },
    {
      name: "Insomnia",
      src: "simple-icons:insomnia",
      alt: "insomnia",
    },
    {
      name: "Ableton Live",
      src: "simple-icons:abletonlive",
      alt: "abletonlive",
    },
    {
      name: "Pro Tools",
      src: "fad:logo-protools",
      alt: "protools",
    },
    {
      name: "Adobe Premiere Pro",
      src: "file-icons:adobe-premiere",
      alt: "adobepr",
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
              <h5 className="skills" style={{}}>{icon.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;