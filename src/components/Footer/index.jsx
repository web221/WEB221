/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> <a href="mailto:hello@web221.com">hello@web221.com</a>
                  </li>
                  <li>
                    <span>Phone : </span> +94 72-771-3311 / +94 77-006-1576
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="https://www.facebook.com/web221" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com/web.221_" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/web221/" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.tiktok.com/@web_221?_r=1&_d=e4agjiegb0ae6l&sec_uid=MS4wLjABAAAAuLdUTev-hKbmcNJMFdHxPZJDBZoobLbZ4e-n5PjmRSn759xu5VI0wgwKEFiwnCf5&share_author_id=7154393465953141786&sharer_language=en&source=h5_m&u_code=e4agj9fag2jl4l&timestamp=1694624157&user_id=7154393465953141786&sec_user_id=MS4wLjABAAAAuLdUTev-hKbmcNJMFdHxPZJDBZoobLbZ4e-n5PjmRSn759xu5VI0wgwKEFiwnCf5&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7274050612232619784&share_link_id=1d8edb40-cccb-47ec-9ea3-f14343623cd8&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://youtube.com/@web2216?si=S44ye5xpkH-htiaU" className="icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newslatter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2024, WEB221 all rights received.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
