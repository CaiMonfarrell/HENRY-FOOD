import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage/landingPage.css";
import food from "../../images/platods comida.jpg";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="box">
        <h1 className="titulo">Welcome to Recipe Book</h1>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <button className="button"><span>Enter here</span></button>
        </Link>
      </div>
      <div className="contenedorImg">
        <img src={food} alt="food" className="image" />
      </div>
    </div>
  );
}



// import React from "react";
// import {Link} from 'react-router-dom';


// export default function LandingPage(){
//     return(
//         <div>
//             <h1> Bienvenidos a mi super pagina</h1>
//             <Link to= '/home'>
//                 <button>Ingresar</button>
//             </Link>
//         </div>
//     );
// }