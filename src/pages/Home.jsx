import React from "react";
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import "../App.css"; 
import "../Home.css";


const Home = () => {
  return (
    <div>
      <section id="home" className="section home">
        <div className="home-page">
          <div className="content-center">
            <h1 className="content-center-title">THIN</h1>
            <h1 className="content-center-title">CRUST PIZZA</h1>
            <button className="menu-button">
              <a href="#menu" className='menu-button-link'>LET ME SEE THE MENU</a>
            </button>
          </div>
          <div className="open-hours">
            <h3 className="open-hours-title">OPEN FROM 10AM TO 12PM</h3>
          </div>
        </div>
      </section>
      <section id="menu" className="section menu">
        <Menu />
      </section>
      <section id="about" className="section about">
    <About />
  </section>
  <section id="contact" className="section contact">
    <Contact />
  </section>

  </div>
  );
};

export default Home;