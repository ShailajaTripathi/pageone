import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="top-container">
        <div className="client-heading about-head">
          <h1>Office and team</h1>
        </div>
      </div>
      <div className="middle-container">
        <div className="image-section">
          <div className="about-image">
            <img src="https://preview.colorlib.com/theme/pageone/images/xabout_1.jpg.pagespeed.ic.cqA1ZZJiPN.webp" />
          </div>
          <div className="about-content">
            <h2>Our office</h2>
            <p>
              <b>Separated they live in Bookmarksgrove</b> right at the coast of
              the Semantics, a large language ocean. Far far away, behind the
              word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts.
              <br />
              <br />
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
              <br /> <br />A small river named Duden flows by their place and
              supplies it with the necessary regelialia. It is a paradisematic
              country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
      <div className="last-container">
          <h2>Our Team</h2>
        <div className="about-team-data">
          {/*flex-box  */}
          <div className="team-data">
            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png" />
            <h3>Bradley Costa</h3>
            <p className="title">CEO, Partner</p>
            <p className="team-description">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>

          <div className="team-data">
            <img src="data:image/png;base64,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" />
            <h3>Chanice Muir</h3>
            <p className="title">CTO, Partner</p>
            <p className="team-description">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>

          <div className="team-data">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7D5VuqJvQB3TXblnwGTpu7kaFUNhvGATo8lMTE_eEnNm9fAn23q0I3aIU4QZbJy0kF8&usqp=CAU"/>
            <h3>Alisha Ellison</h3>
            <p className="title">Web Designer</p>
            <p className="team-description">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>

          <div className="team-data">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqwxWvbMEIgFui8MAhF31OycLB1acIB96E_A8pETexCpCS_5eI4Csil5tTJEvsnds_xw&usqp=CAU" />
            <h3>Bradley Costa</h3>
            <p className="title">Web Developer</p>
            <p className="team-description">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default About;
