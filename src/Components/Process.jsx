import React from "react";
import "./process.css";
import "./service.css";

function Process() {
  return (
      
    <div className="process-container" id="process">
      <div className="top-container">
        <div className="heading">
          <h1>Our Process</h1>
        </div>
        <div className="details">
          <p>
            <b>Separated they live in Bookmarksgrove</b> right at the coast of
            the Semantics, a large language ocean. Far far away, behind the word
            mountains, far from the countries Vokalia and Consonantia, there
            live the blind texts.
          </p>
          <div className="btn-group">
            <div>
              <a href="#" className="btn-details">
                Learn More
              </a>
            </div>
            <div>
              <a href="#" className="btn-scroll">
                Scroll down
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* first-section ends here */}
      
      {/* upper-row */}
      <div className="last-section">
        <div className="box-row">
          <div className="active-box">
            <p className="top-number">01</p>
            <h3 className="box-heading">Information Gathering</h3>
            <p className="box-details">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="box-items">
            <p className="top-number">02</p>
            <h3 className="box-heading">Planning</h3>
            <p className="box-details">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="box-items">
            <p className="top-number">03</p>
            <h3 className="box-heading">Design</h3>
            <p className="box-details">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        {/* lower row */}
        <div className="box-row">
          <div className="box-items">
            <p className="top-number">04</p>
            <h3 className="box-heading">Development</h3>
            <p className="box-details">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="box-items">
            <p className="top-number">05</p>
            <h3 className="box-heading">Testing and Delivery</h3>
            <p className="box-details">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="box-items">
            <p className="top-number">06</p>
            <h3 className="box-heading">Maintenance</h3>
            <p className="box-details">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
    
    </div>
    </div>
  );
}

export default Process;
