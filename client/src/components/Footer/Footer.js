import React from "react";
import linkedin from "../../images/linkedin.blanco.png";
import github from "../../images/GitHub-Simbolo1.png";

export default function Footer() {

  return (

    <div className="containerInfo">
      <div className="info">
        <h4 className="copyR">Hola soy ricardo</h4>
        <a href="linkedin.com/in/ricardomonfarrellpueyrredon" target="_blank">
            <img className="linkedIn" src={linkedin} alt="img"/>
        </a>
        <a href="https://github.com/CaiMonfarrell" target="_blank">
        <img className="gitHub" src={github} alt="img" />
        </a>
      </div>

      <h4>Copyright © 2022</h4>
    </div>

  );
}

