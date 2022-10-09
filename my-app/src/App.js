import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { Link } from "react-router-dom";
import logo from "./Logo/BAd habits.jpg"
import Footer from "./Components/Footer";
import AfterCare from "./Components/AfterCare";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div id="logo-div">
      </div>
      <nav id="links-nav">
      <div id="shop-container">
      <p id="shop-name">Bad Habits Tattoo Studio</p>
      </div>
      <Link className='link-nav' to="/">Home</Link>
      <Link className='link-nav' to="/About">About</Link>
      <Link className='link-nav' to="/AfterCare">Aftercare</Link>
      <Link className='link-nav' to="/Contact">Contact</Link>
      </nav>
      <img id="logo" src={logo} alt="logo" />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="AfterCare" element={<AfterCare />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
    
  );
}

export default App;
