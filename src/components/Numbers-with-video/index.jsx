/* eslint-disable @next/next/no-img-element */
import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Split from "../Split";

const NumbersWithVideo = ({ theme = "dark" }) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(/img/pattern${theme === 'light' ? '-light':''}.png)` }}
      >
        {/*<div className="container">
          <div className="number-sec">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="item no-bord">
                  <span className="icon pe-7s-smile"></span>
                  <h3 className="custom-font">
                    <span className="count">2400</span>
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      Happy Clients
                    </p>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item">
                  <span className="icon pe-7s-portfolio"></span>
                  <h3 className="custom-font">
                    <span className="count">133</span>
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      Compleate Projects
                    </p>
  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item">
                  <span className="icon pe-7s-cloud-download"></span>
                  <h3 className="custom-font">
                    <span className="count">254</span> k
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      Files Downloaded
                    </p>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item">
                  <span className="icon pe-7s-medal"></span>
                  <h3 className="custom-font">
                    <span className="count">46</span>
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      Award Win
                    </p>
                  </Split>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        {typeof window !== "undefined" && (
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId="127203262"
            onClose={() => setOpen(false)}
          />
        )}

      </div>
    </section>
  );
};

export default NumbersWithVideo;
