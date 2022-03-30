import React from "react";
import "./process.css";
import "./service.css";

function Process() {
  return (
    <div className="process-container">
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
<div className="bottom-section">
<div className="box-row">
    <div className="box-item"></div>
    <div className="box-item"></div>
    <div className="box-item"></div>
</div>

{/* lower row */}
<div className="box-row">

<div className="box-item"></div>
<div className="box-item"></div>
<div className="box-item"></div>

</div> 
</div>




    </div>
  );
}

export default Process;
