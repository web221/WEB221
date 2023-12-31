import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>Best Features</h6>
          <h3>Services.</h3>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-settings"></span>
              <h6>Machine Learning</h6>
              <p>
              Data-driven insights and automation.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Web & Mobile App Development</h6>
              <p>
              Unified cross-platform experiences for engagement and convenience.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Graphic Design</h6>
              <p>
              Creativity in visual communication.
              </p>
            </div>
          </div>
        </div>
        <div className="smore custom-font">
          <Link href="/about/">Discover More</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Services3;
