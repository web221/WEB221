import React from "react";
import { Formik, Form, Field } from "formik";
import axios from 'axios';
import Split from '../Split';

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    // alert(JSON.stringify(values, null, 2));
                    // show message
                    const formData = new FormData();

                    formData.append('name', values.name);
                    formData.append('email', values.email);
                    formData.append('message', values.message);

                    const res = await axios.post('/contact.php', formData);

                    if (!res) return;

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. We will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form"  action="../../../public/contact.php" method="post">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button type="submit" className={`btn-curve ${theme === 'dark' ? 'btn-lit':'btn-color'} disabled`}>
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">hello@web221.com</a>
                  </h5>
                  <h5>+94 72 771 3311</h5>
                  <h5>+94 77 006 1576</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="social mt-50">
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
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="https://youtube.com/@web2216?si=S44ye5xpkH-htiaU" className="icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.687203718404!2d-0.14297520856388865!3d51.502466162777694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1644772966009!5m2!1sen!2seg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
                          </div>*/}

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
              © 2023, WEB221 all right received.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
