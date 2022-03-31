import React from "react";
import "./home.css";

function Home() {
  return (
    <div id ="home">
      <div className="main-section" >
        <h1>
          We are web agency based <br />  in Los Angeles, CA
        </h1>
      </div>
      <div className="bottom-section">
        <div className="first-division">
          <div className="first-division-item">
            <p>
              <b>Far far away, behind the word mountains,</b> far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
      </div>

                <div className="bottom-list-container">
                    <ul className="bottom-list">
                        <li>Technology</li>
                        <li>Marketing</li>
                        <li>Product & design</li>
                    </ul>
                </div>
                <div className="bottom-list-container">
                    <ul className="bottom-list">
                        <li>Strategic Consulting</li>
                        <li>Business Synergies</li>
                        <li>Fundrising</li>
                    </ul>
                </div>
      </div>
    </div>
  );
}

export default Home;
