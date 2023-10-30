import React, { useRef } from "react";
import axios from 'axios';
import Split from '../Split';

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = useRef(null);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendMessage(500);

    const formData = new FormData(event.target);

    try {
      const res = await axios.post('../../../public/contact.php', formData);

      if (res) {
        messageRef.current.innerText =
          "Your Message has been successfully sent. We will contact you soon.";
        
        // Clear form values
        event.target.reset();

        // Clear message after 2 seconds
        setTimeout(() => {
          messageRef.current.innerText = "";
        }, 2000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <form
                  id="contact-form"
                  action="../../../public/contact.php"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="messages" ref={messageRef}></div>

                  <div className="controls">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        validate={validateEmail}
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn-curve ${theme === 'dark' ? 'btn-lit':'btn-color'}`}
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
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
                  <h5>+94 77 006 1576</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="social mt-50">
                  {/* Add your social media links here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
