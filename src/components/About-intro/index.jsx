import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                At Web221, we're not just a startup; we're your partners in the journey towards transforming ideas into remarkable digital realities. Our core focus lies at the intersection of web solutions, mobile innovations, and machine learning advancements. We understand that in today's fast-paced digital landscape, businesses need more than just a presence – they require comprehensive, integrated, and cutting-edge solutions that cater to every facet of their digital presence. And that's precisely what we're here to provide.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
