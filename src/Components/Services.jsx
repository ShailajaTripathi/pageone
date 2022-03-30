import React from "react";
import "./service.css";

function Services() {
  return (
      <div className="main-container">
    <div className="container">
      <div className="top-container">
        <div className="heading">
          <h1>Services</h1>
        </div>
        <div className="details">
          <p>
            <b>Separated they live in Bookmarksgrove</b> right at the coast of
            the Semantics, a large language ocean. Far far away, behind the word
            mountains, far from the countries Vokalia and Consonantia, there
            live the blind texts.
          </p>
          <a href="#" className="btn-details">
            GET IN TOUCH
          </a>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-box">
          <div className="bottom-box-item">
            <div className="box-img">
              <img src="https://wallpaperaccess.com/full/112143.jpg" />
            </div>
            <div className="box-item">
              <h2 >Graphic Design</h2>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. Far far away, behind the word
                mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts.
              </p>
            </div>
          </div>
          <div className="bottom-box-item">
            <div className="box-img">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div className="box-item">
              <h2 >Web Development</h2>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. Far far away, behind the word
                mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts.
              </p>
            </div>
          </div>
        </div>
        {/* first row ends*/}
        <div className="bottom-box">
          <div className="bottom-box-item">
            <div className="box-img">
              <img src="https://preview.colorlib.com/theme/pageone/images/img_3.jpg" />
            </div>
            <div className="box-item">
              <h2 >Graphic Branding</h2>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. Far far away, behind the word
                mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts.
              </p>
            </div>
          </div>
          <div className="bottom-box-item">
            <div className="box-img">
              <img src="https://preview.colorlib.com/theme/pageone/images/ximg_4.jpg.pagespeed.ic.xitJiC5SVk.webp" />
            </div>
            <div className="box-item">
              <h2 >Iconography</h2>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. Far far away, behind the word
                mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts.
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-box-item"></div>
      </div>
    </div>
    </div>
  );
}

export default Services;
