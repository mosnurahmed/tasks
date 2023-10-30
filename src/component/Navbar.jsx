import { useState } from "react";
import { image } from "../assets/img/img";

function Navbar() {

  const [showMenu,setShowMenu] =useState(true)
  return (
    <>
      <div className="navbar">
        <div className="lgo">
          <img src={image.logo} alt="" />
        </div>
        <div className={`${!showMenu?"mainMenu" :"mainMenu active "} `}>
          <p className="offset"></p>
          <p >Agency</p>
          <p >Portfolio</p>
          <p >Services</p>
          <p>Careers</p>
          <p >About</p>
        </div>
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
         {!showMenu? ( <>
          <i className="fa-solid fa-xmark"></i></>):(<>
            <i className="fa-solid fa-bars"></i>
          </>)

         }
        </div>
        <div className="subMenu">
          <p>Hire Us</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
