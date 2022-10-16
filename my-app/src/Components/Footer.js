import "./Footer.css";
import ig from "../Logo/ig.png";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>

      <div className="footer-container">
        
        <div id="footer-icon">
        <FaRegCopyright/>
        </div>

        <div id="footer-p-1">
        Copyright 2022 Bad Habits Tattoo Studio
        </div>
        <a href="https://www.instagram.com/cansado_boi/?hl=en"><img id="social" src={ig} alt="instagram-logo" /></a>
      </div>
      
      

    </footer>
  );
}