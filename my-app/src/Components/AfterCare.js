import "./AfterCare.css";
import { Container } from 'react-bootstrap';
import icon from "../Logo/BAd habits.jpg";
import Footer from "../Components/Footer";

export default function AfterCare() {
    return (
      <div>
        <img src={icon} alt="website-logo" id="about-logo"/>
      <section>
        <div id="after-care-container">
        <div id="color-div-1"></div>
        <div>
        <h1 id="header-after-care">Tattoo Aftercare</h1>
        <p className="aftercare-p">Here at Bad Habits Tattoo Studio, your health and safety are our priority. Tattoo aftercare is essential for the healing process. After the procedure, we will walk you through the necessary steps and products needed to ensure that your tattoo will heal properly. Neglecting this process may cause harm to your skin and damage the quality of the tattoo. Thankfully, we are professionals at ensuring and reminding you what to do after your new tattoo. The video below is a great resource for tattoo aftercare.</p>
        <br></br>
        </div>
        <Container>
        <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/Xg9Dv7X6ck0" title="YouTube video" allowFullScreen></iframe>
        </div>
        </Container>
        </div>
      </section>
      <Footer id="about-footer"/>
      </div>
    );
  }