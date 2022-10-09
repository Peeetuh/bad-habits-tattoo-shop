import "./Contact.css";
import map from "../Logo/map.png"

export default function Contact() {
    return (
      <section>
        <div id="contact-container">
        <div id="color-div-1"></div>
         <h1 id="header-after-care">Contact</h1>

         <div id="contact-2">
         <div id="card1"><div id="about">Address: 7108 De Soto Ave Canoga Park, CA 91303 United States</div><div id="appointment-booking">Please call or text, (818) 416 - 2745 to book an appointment, or if you have any questions.</div></div>
         <div id="card2"><img id="map" src={map} alt="map" /></div>
         </div>
        </div>
      </section>
    );
  }