import React from "react";
import "./client.css";

function Client() {
  return (
    <div id="client" className="client-container">
      <div className="top-container">
        <div className="client-heading">
          <h1>Our Clients</h1>
        </div>
        <div className="details">
          <p>
            <b>Separated they live in Bookmarksgrove</b> right at the coast of
            the Semantics, a large language ocean. Far far away, behind the word
            mountains, far from the countries Vokalia and Consonantia, there
            live the blind texts.
          </p>
        </div>
      </div>
      <div className="client-last">

        {/* first row */}
        <div className="client-item-box">
          <div className="client-item">
            <img src="https://preview.colorlib.com/theme/pageone/images/xlogo-goldline.png.pagespeed.ic.40nSQphVgJ.webp" />
            <h1>Goldline</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="client-item">
            <img src="https://preview.colorlib.com/theme/pageone/images/xlogo-foxhub.png.pagespeed.ic.m_RIIjdghM.webp" />
            <h1>Foxhub</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        {/* second row */}
        <div className="client-item-box">
          <div className="client-item">
              <img src="https://preview.colorlib.com/theme/pageone/images/xlogo-ideaa.png.pagespeed.ic.dcrk4QzNLC.webp"/>
              <h1>Idea</h1>    
              <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>   </div>
          <div className="client-item"> <img src="https://preview.colorlib.com/theme/pageone/images/xlogo-nirastate.png.pagespeed.ic.PYMusK9IB_.webp"/>
              <h1>Nirastate</h1>    
              <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p> </div>
        </div>
        {/* third-row */}
        <div className="client-item-box">
          <div className="client-item"> <img src="https://preview.colorlib.com/theme/pageone/images/xlogo-nirastate.png.pagespeed.ic.PYMusK9IB_.webp"/>
              <h1>Treva</h1>    
              <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p> </div>
            <div className="client-item">
            <img src="https://preview.colorlib.com/theme/pageone/images/xlogo-goldline.png.pagespeed.ic.40nSQphVgJ.webp" />
            <h1>Goldline</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
