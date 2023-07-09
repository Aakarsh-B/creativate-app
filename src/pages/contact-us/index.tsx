import {
  Dispatch,
  FC,
  LegacyRef,
  SetStateAction,
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";

import NavBar from "@components/navbar/NavBar";
import ScrollToTop from "@components/scroll-to-top/ScrollToTop";

type ContactUsProps = {
  setHomeSelected: Dispatch<SetStateAction<boolean>>;
  setMenuSelected: Dispatch<SetStateAction<boolean>>;
  setContactUsSelected: Dispatch<SetStateAction<boolean>>;
};

const ContactUs: FC<ContactUsProps> = ({
  setMenuSelected,
  setContactUsSelected,
  setHomeSelected,
}) => {
  const form = useRef<HTMLFormElement | null>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    const templateParams = {
      name,
      email,
      budget,
      message,
    };

    if (form.current) {
      console.log("e", e);
      emailjs
        .send(
          "service_xwtxgyb",
          "template_4ctawem",
          templateParams,
          "niT-1JZDjElTfJkgG"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  return (
    <>
      {/* <div className="preloader js-preloader"> */}
      <ScrollToTop />
      <NavBar
        setMenuSelected={setMenuSelected}
        setContactUsSelected={setContactUsSelected}
        setHomeSelected={setHomeSelected}
      />
      <main className="">
        <section className="layout-pt-xl layout-pb-sm">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 offset-xl-1 col-lg-11">
                <div className="sectionHeading -lg">
                  <p className="sectionHeading__subtitle">Hire Us</p>
                  <h1 className="sectionHeading__title leading-sm">
                    Got a project to discuss? Get in touch.
                  </h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div className="sectionHeading -md" id="contact-us-heading">
                  {/* <h1 style={{ fontWeight: "700", fontSize: "56px" }}>
                    Have a project in mind?
                  </h1> */}
                  <p className="text-black leading-md mt-24">
                    Use the form below or <b>send us an email</b>.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center layout-pt-sm">
              <div className="col-xl-9">
                <div className="contact-form -type-1">
                  <form
                    className="row x-gap-32 y-gap-32 js-ajax-form"
                    // method="POST"
                    ref={
                      form as unknown as LegacyRef<HTMLFormElement> | undefined
                    }
                    onSubmit={sendEmail}
                    //   data-message-success="Your message has been sent! We will reply you as soon as possible."
                    //   data-message-error="Something went wrong. Please contact us directly at <a href='hello%40stukram.html'>hello@stukram.com</a>."
                  >
                    <div className="col-12">
                      <label className="js-input-group">
                        Name
                        <input
                          type="text"
                          name="name"
                          // data-required
                          placeholder="Fill in your name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <span className="form__error"></span>
                      </label>
                    </div>

                    <div className="col-12">
                      <label className="js-input-group">
                        Email
                        <input
                          type="text"
                          name="email"
                          // data-required
                          placeholder="Fill in your email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="form__error"></span>
                      </label>
                    </div>

                    <div className="col-12">
                      <label className="js-input-group">
                        Budget (optional)
                        <input
                          type="text"
                          name="budget"
                          placeholder="Do you have a fixed budget?"
                          onChange={(e) => setBudget(e.target.value)}
                        />
                        <span className="form__error"></span>
                      </label>
                    </div>

                    <div className="col-12">
                      <label className="js-input-group">
                        Tell us about your project
                        <textarea
                          name="message"
                          placeholder="Project description"
                          style={{
                            lineHeight: "0.5rem",
                            paddingTop: "23px",
                            paddingBottom: "15px",
                          }}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <span className="form__error"></span>
                      </label>
                    </div>

                    <div className="col-12 ajax-form-alert js-ajax-form-alert">
                      <div className="ajax-form-alert__content"></div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="button -md -black text-white"
                        // onClick={handleSendEmail}
                      >
                        <a
                        // href={`mailto:${email}?subject=${encodeURIComponent(
                        //   subject
                        // )}&body=${encodeURIComponent(body)}`}
                        >
                          Send Message
                        </a>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer -type-1 bg-dark-1">
          <div className="container">
            <div className="footer__top">
              <div className="row y-gap-48 justify-content-between">
                <div className="col-lg-auto col-sm-12">
                  <a href="home-1.html" className="footer__logo text-white">
                    Stukram.
                  </a>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <h4 className="text-xl fw-500 text-white">Studio</h4>

                  <div className="footer__content text-base text-light mt-16 sm:mt-12">
                    <p>
                      Studio Stukram 1910 Gateway Road, Portland, Oregon 97230
                    </p>
                    <p className="mt-8">hello@stukram.com</p>
                    <p className="mt-8">+1 202 555 0171</p>
                  </div>
                </div>

                <div className="col-lg-auto col-sm-4">
                  <h4 className="text-xl fw-500 text-white">Links</h4>

                  <div className="footer__content text-base text-light mt-16 sm:mt-12">
                    <div>
                      <a
                        //   data-barba
                        href="blog-1.html"
                        className="button -underline"
                      >
                        Blog
                      </a>
                    </div>
                    <div>
                      <a
                        //   data-barba
                        href="about-1.html"
                        className="button -underline mt-4"
                      >
                        Abous Us
                      </a>
                    </div>
                    <div>
                      <a
                        //   data-barba
                        href="#"
                        className="button -underline mt-4"
                      >
                        Shop
                      </a>
                    </div>
                    <div>
                      <a
                        //   data-barba
                        href="contact-1.html"
                        className="button -underline mt-4"
                      >
                        Contacts
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-auto col-auto">
                  <h4 className="text-xl fw-500 text-white">Follow us</h4>

                  <div className="social -bordered mt-16 sm:mt-12">
                    <a
                      className="social__item text-white border-light"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      className="social__item text-white border-light"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      className="social__item text-white border-light"
                      href="#"
                    >
                      <i className="fa fa-youtube-play"></i>
                    </a>
                    <a
                      className="social__item text-white border-light"
                      href="#"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer__bottom -light">
              <div className="row">
                <div className="col">
                  <div className="footer__copyright">
                    <p className="text-light">
                      @ 2020, Stukram. Made with passion by Krellion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          =
        </footer>
      </main>
      {/* </div> */}
    </>
  );
};

export default ContactUs;
