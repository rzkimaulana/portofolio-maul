import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import MyImage from "./images/gambar1.jpg"; // Pastikan gambar ada di folder src/images

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hallo i'm Rizki Maulana
          <br />
          Full stack developer
          <br />
          Welcome to my word
        </h1>
      </div>
      
      {/* Menambahkan gambar di sini */}
      <div className="home__image-wrapper">
        <img src={MyImage} alt="Rizki Maulana" />
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
