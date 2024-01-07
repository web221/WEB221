/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";
import parallaxie from "../../common/parallaxie";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
    parallaxie('.testimonials.bg-img.parallaxie');
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/3.jpg)"
              : this.props.imgSrc
                ? `url(${this.props.imgSrc})`
                : "none"
            }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What Peapole Says?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            <span className="tbg">Testimonials</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                  <p>
                    WEB221 was extremely flexible in their approach and was always willing to
                    walk that extra mile for their deliverables. They are comprised of very energetic individuals and
                    I was happy to work with them for digital marketing purposes.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Janaka Edirisooriya
                              </h6>
                              <span className="author-details">
                                Producer, Yugathra
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/janaka_yugathra.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Janaka Edirisooriya
                            </h6>
                            <span className="author-details">
                              Producer, Yugathra
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    I had the pleasure of working with the fantastic team at WEB221. They not only created a stunning website for my business but also worked their magic to rank it number 1 in SEO. Their expertise and dedication are truly commendable. Thanks to WEB221, my online presence has never been stronger, and I'm seeing significant growth in my business. I highly recommend their services to anyone looking for top-notch web development and SEO solutions!
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Sanjana fernando
                              </h6>
                              <span className="author-details">
                                Owner, Bride Zone pvt Ltd
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/sanjana_bz.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Sanjana fernando
                            </h6>
                            <span className="author-details">
                              Owner, Bride Zone pvt Ltd
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    Working with Web221 was an absolute delight! Their team's creativity and expertise in website design truly impressed me. They took my vision and turned it into a stunning, user-friendly website that perfectly represents my brand. The attention to detail, responsiveness, and seamless communication throughout the process made me feel valued as a client. I'm truly happy with the final result of my website.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Kasun Prabudha
                              </h6>
                              <span className="author-details">
                                Owner, Island Gateway Tours
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/kasun_IGW.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Kasun Prabudha
                            </h6>
                            <span className="author-details">
                              Owner, Island Gateway Tours
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
