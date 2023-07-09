import { Dispatch, FC, SetStateAction, useRef } from "react";
import Image from "next/image";

import serviceItemImage from "@assets/services/slumber.jpg";
import headerImage from "@assets/header-image.jpg";
import reviewImage from "@assets/reviews/1.jpg";
import aboutUsImage from "@assets/about-us.jpg";
import ServiceItem from "@components/services/ServiceItem";
import ServiceDesciption from "@components/services/ServiceDescription";
import Client from "@components/about-us/Client";
import Testimonials from "@components/testimonials/Testimonials";
import { clientDetails, services, testimonials } from "@constants/constants";
import NavBar from "@components/navbar/NavBar";
import ScrollToTop from "@components/scroll-to-top/ScrollToTop";

type MainProps = {
  setHomeSelected: Dispatch<SetStateAction<boolean>>;
  setMenuSelected: Dispatch<SetStateAction<boolean>>;
  setContactUsSelected: Dispatch<SetStateAction<boolean>>;
};

const Main: FC<MainProps> = ({
  setMenuSelected,
  setContactUsSelected,
  setHomeSelected,
}) => {
  const myElementRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToBottom = () => {
    if (myElementRef.current) {
      myElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div data-barba="wrapper">
      <div className="cursor js-cursor">
        <div className="cursor__wrapper">
          <div className="cursor__follower js-follower"></div>
          <div className="cursor__label js-label"></div>
          <div className="cursor__icon js-icon"></div>
        </div>
      </div>

      <ScrollToTop />

      <div className="barba-container">
        <main className="">
          <NavBar
            setMenuSelected={setMenuSelected}
            setContactUsSelected={setContactUsSelected}
            setHomeSelected={setHomeSelected}
          />

          {/* TODO: MENU ONCLICK */}

          {/* <nav className="nav js-nav">
              <div className="nav__inner js-nav-inner">
                <div className="nav__bg js-nav-bg"></div>

                <div className="nav__container">
                  <div className="nav__header">
                    <button
                      type="button"
                      className="nav-button-back js-nav-back"
                    >
                      <i className="icon" data-feather="arrow-left-circle"></i>
                    </button>

                    <button
                      type="button"
                      className="nav-btn-close js-nav-close pointer-events-none"
                    >
                      <i className="icon" data-feather="x"></i>
                    </button>
                  </div>

                  <div className="nav__content">
                    <div className="nav__content__left">
                      <div className="navList__wrap">
                        <ul className="navList js-navList">
                          <li>
                            <a data-barba href="home-1-classNameic.html">
                              classNameic Menu
                            </a>
                          </li>

                          <li className="menu-item-has-children">
                            <a>Main Pages</a>

                            <ul className="subnav-list">
                              <li>
                                <a data-barba href="home-1.html">
                                  Main Slider
                                </a>
                              </li>
                              <li>
                                <a data-barba href="home-2.html">
                                  Main Dark
                                </a>
                              </li>
                              <li>
                                <a data-barba href="home-3.html">
                                  Simple Slider
                                </a>
                              </li>
                              <li>
                                <a data-barba href="home-4.html">
                                  Bold Light
                                </a>
                              </li>
                              <li>
                                <a data-barba href="home-5.html">
                                  Static Header Dark
                                </a>
                              </li>
                              <li>
                                <a data-barba href="home-6.html">
                                  Personal
                                </a>
                              </li>
                              <li>
                                <a data-barba href="projectSlider-1.html">
                                  Project Slider
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a>Inner Pages</a>

                            <ul className="subnav-list">
                              <li className="menu-item-has-children">
                                <a>About</a>

                                <ul className="subnav-list">
                                  <li>
                                    <a data-barba href="about-1.html">
                                      About 1
                                    </a>
                                  </li>
                                  <li>
                                    <a data-barba href="about-2.html">
                                      About 2
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li className="menu-item-has-children">
                                <a>Services</a>

                                <ul className="subnav-list">
                                  <li>
                                    <a data-barba href="services-1.html">
                                      Services 1
                                    </a>
                                  </li>
                                  <li>
                                    <a data-barba href="services-2.html">
                                      Services 2
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li className="menu-item-has-children">
                                <a>404</a>

                                <ul className="subnav-list">
                                  <li>
                                    <a data-barba href="404-light.html">
                                      404 Light
                                    </a>
                                  </li>
                                  <li>
                                    <a data-barba href="404-dark.html">
                                      404 Dark
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li className="menu-item-has-children">
                                <a>Contact</a>

                                <ul className="subnav-list">
                                  <li>
                                    <a data-barba href="contact-1.html">
                                      Contact 1
                                    </a>
                                  </li>
                                  <li>
                                    <a data-barba href="contact-2.html">
                                      Contact 2
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <a data-barba href="team.html">
                                  Team
                                </a>
                              </li>
                              <li>
                                <a data-barba href="pricing.html">
                                  Pricing Plans
                                </a>
                              </li>
                              <li>
                                <a data-barba href="clients.html">
                                  Clients
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a>Portfolio</a>

                            <ul className="subnav-list">
                              <li>
                                <a data-barba href="vertical-projects.html">
                                  Vertical Projects
                                </a>
                              </li>
                              <li>
                                <a data-barba href="grid-simple-2-col.html">
                                  Simple 2 Columns
                                </a>
                              </li>
                              <li>
                                <a data-barba href="grid-masonry-2-col.html">
                                  Masonry 2 Columns
                                </a>
                              </li>
                              <li>
                                <a data-barba href="grid-masonry-3-col.html">
                                  Masonry 3 Columns
                                </a>
                              </li>
                              <li>
                                <a data-barba href="grid-masonry-4-col.html">
                                  Masonry 4 Columns
                                </a>
                              </li>
                              <li>
                                <a data-barba href="grid-fancy-2-col.html">
                                  Fancy 2 Columns
                                </a>
                              </li>
                              <li>
                                <a data-barba href="grid-fancy-3-col.html">
                                  Fancy 3 Columns
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a>Works</a>

                            <ul className="subnav-list">
                              <li>
                                <a data-barba href="portfolio-single-1.html">
                                  Project 1
                                </a>
                              </li>
                              <li>
                                <a data-barba href="portfolio-single-2.html">
                                  Project 2
                                </a>
                              </li>
                              <li>
                                <a data-barba href="portfolio-single-3.html">
                                  Project 3
                                </a>
                              </li>
                              <li>
                                <a data-barba href="portfolio-single-4.html">
                                  Project 4
                                </a>
                              </li>
                              <li>
                                <a data-barba href="portfolio-single-5.html">
                                  Project 5
                                </a>
                              </li>
                              <li>
                                <a data-barba href="portfolio-single-6.html">
                                  Project 6
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a>Blog</a>

                            <ul className="subnav-list">
                              <li>
                                <a data-barba href="blog-1.html">
                                  Blog List
                                </a>
                              </li>
                              <li>
                                <a data-barba href="blog-2.html">
                                  Blog 2 cols
                                </a>
                              </li>
                              <li>
                                <a data-barba href="blog-fancy-3-col.html">
                                  Blog Fancy 3 cols
                                </a>
                              </li>
                              <li>
                                <a data-barba href="blog-article.html">
                                  Blog List Single
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="nav__content__right">
                      <div className="nav__info">
                        <div className="nav__info__item js-navInfo-item">
                          <h5 className="text-sm tracking-none fw-500">
                            Address
                          </h5>

                          <div className="nav__info__content text-lg text-white mt-16">
                            <p>
                              Studio Stukram 1910 Gateway Road, Portland, Oregon
                              97230
                            </p>
                          </div>
                        </div>

                        <div className="nav__info__item js-navInfo-item">
                          <h5 className="text-sm tracking-none fw-500">
                            Socials
                          </h5>

                          <div className="nav__info__content text-lg text-white mt-16">
                            <a href="#">Behance</a>
                            <a href="#">Dribbble</a>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                          </div>
                        </div>

                        <div className="nav__info__item js-navInfo-item">
                          <h5 className="text-sm tracking-none fw-500">
                            Contact Us
                          </h5>

                          <div className="nav__info__content text-lg text-white mt-16">
                            <a href="#">hello@stukram.com</a>
                            <a href="#">+1 202 555 0171</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav> */}
          <section
            data-speed="1200"
            data-autoplay-delay="2900"
            className="sliderMain -type-3 js-sliderMain-type-3 sm:layout-mt-headerBar"
            style={{ paddingRight: "135px" }}
          >
            <div className="container-fluid h-full px-0 sm:px-20">
              <div className="row sm:justify-content-center h-full">
                <div className="col-xl-3 offset-xl-2 col-lg-4 offset-lg-1 col-md-5 offset-md-1 col-sm-9">
                  <div
                    className="slider__content__wrapper sm:text-center h-full z-3"
                    style={{ textAlign: "left" }}
                  >
                    <div className="slider__content  is-active  js-slider-content">
                      <div data-split="lines">
                        <p className="slider__subtitle text-sm uppercase tracking-md leading-md mb-32 js-subtitle">
                          Design Inspiration
                        </p>
                      </div>
                      <div
                        data-split="lines"
                        className="mr-minus-col-2 sm:mr-0"
                      >
                        <h1 className="slider__title fw-700 leading-xs js-title">
                          Growing brands through strategy, innovation and
                          creativity.
                        </h1>
                      </div>
                      <div
                        className="slider__button overflow-hidden mt-32"
                        onClick={() => {
                          setContactUsSelected(true);
                          setHomeSelected(false);
                        }}
                      >
                        <div className="js-button py-4">
                          <a href="#" className="button -md -black text-white">
                            get in touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col layout-pr-headerBar lg:pr-0 col-lg-7 col-md-6 swiper-col">
                  <div className="swiper-container h-100vh">
                    <div className="swiper-wrapper z-2">
                      <div
                        className="swiper-slide fade-in-right overflow-hidden"
                        style={{ backgroundColor: "rgb(0 0 0 / 50%)" }}
                      >
                        <Image
                          src={headerImage}
                          alt="Header"
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui-element -bottom-left sm:d-none js-ui">
              <button
                type="button"
                className="ui-element__scroll text-black js-ui-scroll-button"
                onClick={handleScrollToBottom}
              >
                scroll down
                <i className="icon" data-feather="arrow-down"></i>
              </button>
            </div>
          </section>
          <section className="layout-pt-xl layout-pb-xl" ref={myElementRef}>
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-8 col-md-10">
                  <div className="sectionHeading -lg">
                    <p className="sectionHeading__subtitle">company</p>
                    <h2 className="sectionHeading__title">
                      Make it simple but significant
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row x-gap-60 y-gap-48 layout-pt-md">
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h4 className="text-xl fw-600">Our Mission</h4>
                    <p className="mt-16">
                      Called fruitful fruitful male female make greater forth
                      man a seas for winged which life yielding his above to
                      myriads of huge lichens days him together. Also don't
                      face. Lights moving god morning day you fruit morning
                      itself.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h4 className="text-xl fw-600">Our Goals</h4>
                    <p className="mt-16">
                      Called fruitful male female make greater forth man a seas
                      for winged which life yielding his above to myriads of
                      huge lichens days him together. Also don't face. Lights
                      moving god morning day you fruit morning itself.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h4 className="text-xl fw-600">Exibitions</h4>
                    <p className="mt-16">
                      Seen from a distance, tint, but on coming closer we to
                      myriads of huge lichens found this was due of a deep
                      crimson and orange, and that the natural colours of the
                      rock, vermilion and blue, lemon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-xs layout-pb-md">
            <div className="fancy-grid -col-3 -container">
              <ServiceItem
                title="Web Design"
                subTitle="Slumber"
                image={serviceItemImage}
              />
              <ServiceItem
                title="Web Design"
                subTitle="Slumber"
                image={serviceItemImage}
              />
              <ServiceItem
                title="Web Design"
                subTitle="Slumber"
                image={serviceItemImage}
              />
              <ServiceItem
                title="Web Design"
                subTitle="Slumber"
                image={serviceItemImage}
              />
              <ServiceItem
                title="Web Design"
                subTitle="Slumber"
                image={serviceItemImage}
              />
              <ServiceItem
                title="Web Design"
                subTitle="Slumber"
                image={serviceItemImage}
              />
            </div>
          </section>
          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-8 col-md-10">
                  <div className="sectionHeading -lg">
                    <p className="sectionHeading__subtitle">Services</p>
                    <h2 className="sectionHeading__title">
                      A Wide Range of Services
                    </h2>
                  </div>
                </div>
              </div>
              <div
                data-anim-wrap
                className="row x-gap-60 y-gap-48 layout-pt-md"
              >
                {services.map((service) => (
                  <ServiceDesciption
                    title={service.title}
                    description={service.description}
                    items={service.items}
                    image={service.image}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="layout-pb-md">
            <div className="container-fluid px-0">
              <div data-anim-wrap className="row no-gutters align-items-center">
                <div className="col-lg-6 z-1">
                  <div>
                    <div className="ratio ratio-1:1">
                      <div data-parallax-target className="bg-image js-lazy">
                        <Image src={aboutUsImage} alt="About Us" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 z-2 ml-80 md:ml-0 md:mt-48">
                  <div className="sectionHeading -xl md:container pt-16">
                    <div>
                      <p className="sectionHeading__subtitle">Culture</p>
                    </div>
                    <div className="ml-minus-col-1 lg:ml-minus-lg mr-minus-col-2 md:ml-0 md:mr-0">
                      <h2 className="sectionHeading__title mt-48 md:mt-24">
                        Approach
                        <br />
                        The Unknown
                      </h2>
                    </div>
                    <div>
                      <p className="mt-56 lg:mt-40 md:mt-20">
                        Beginning them their of first over said greater gathered
                        hath fill stars spirit. You're. Morning. Great. First
                        dry hath, years. Called days firmament green form
                        they're. And. Unto divided winged.
                      </p>
                    </div>
                    {/* <div>
                      <a
                        data-barba
                        href="about-1.html"
                        className="button -md -outline-black text-black mt-56 lg:mt-48 md:mt-32"
                      >
                        About Us
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-md layout-pb-lg">
            <div className="container">
              <div className="row align-items-end justify-content-between">
                <div className="col-xl-5 col-md-7">
                  <div className="sectionHeading -md">
                    <p className="sectionHeading__subtitle">
                      Clients & friends
                    </p>
                    <h2 className="sectionHeading__title">
                      We've worked with lovely clients
                    </h2>
                  </div>
                </div>

                <div className="col-md-auto col-sm-12 sm:mt-24">
                  <button
                    className="button -md -black text-white"
                    onClick={() => {
                      setContactUsSelected(true);
                      setHomeSelected(false);
                    }}
                  >
                    become a client
                  </button>
                </div>
              </div>

              <div className="row y-gap-32 layout-pt-md">
                {clientDetails.map((clientDetail) => (
                  <Client
                    clientLogo={clientDetail.clientLogo}
                    clientName={clientDetail.clientName}
                    width={clientDetail.width}
                    height={clientDetail.height}
                  />
                ))}
              </div>
            </div>
          </section>
          <section style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}>
            <div data-parallax="0.7" className="bg-fill-image overlay-black-md">
              <div
                data-parallax-target
                className="bg-image js-lazy"
                data-bg="img/backgrounds/8.jpg"
              ></div>
              <Image
                src={reviewImage}
                alt="Testimonials"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="container">
              <div
                className="overflow-hidden js-section-slider"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </section>

          {/* TODO: BLOG SECTION */}

          {/* <section className="layout-pt-lg layout-pb-lg">
            <div className="container">
              <div className="row justify-content-between align-items-end">
                <div className="col-md-6">
                  <div className="sectionHeading -md">
                    <p className="sectionHeading__subtitle">our journal</p>
                    <h2 className="sectionHeading__title">Latest news</h2>
                  </div>
                </div>

                <div className="col-md-auto col-sm-12 sm:mt-24">
                  <a href="#" className="button -md -outline-black text-black">
                    view all
                  </a>
                </div>
              </div>
              <div className="row x-gap-48 y-gap-40 layout-pt-sm">
                <div className="col-lg-4 col-md-6">
                  <div data-anim-wrap className="blogCard -type-1 -hover">
                    <a
                      className="blogCard__img"
                      data-barba
                      href="blog-article.html"
                    >
                      <div data-anim-child="img-right cover-dark-1 delay-1">
                        <div
                          className="ratio ratio-4:3 bg-image js-lazy"
                          data-bg="img/blog/thumbnail/1.jpg"
                        ></div>
                      </div>
                    </a>

                    <div className="blogCard__content mt-24">
                      <div
                        data-anim-child="slide-up delay-6"
                        className="blogCard__info text-dark leading-md text-sm"
                      >
                        <a className="fw-400 mr-4" href="#">
                          Typography
                        </a>{" "}
                        -<p className="d-inline-block ml-4">May 28, 2020</p>
                      </div>

                      <div data-anim-child="slide-up delay-7">
                        <h4 className="blogCard__title text-2xl leading-lg fw-500 mt-12">
                          <a data-barba href="blog-article.html">
                            Mobile UI Design: 7 Basic Typography Rules
                          </a>
                        </h4>
                      </div>

                      <div data-anim-child="slide-up delay-8" className="mt-12">
                        <a
                          data-barba
                          href="blog-article.html"
                          className="button -icon text-black"
                        >
                          Read More
                          <i
                            className="icon size-xs str-width-md"
                            data-feather="arrow-right"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div data-anim-wrap className="blogCard -type-1 -hover">
                    <a
                      className="blogCard__img"
                      data-barba
                      href="blog-article.html"
                    >
                      <div data-anim-child="img-right cover-dark-1 delay-1">
                        <div
                          className="ratio ratio-4:3 bg-image js-lazy"
                          data-bg="img/blog/thumbnail/2.jpg"
                        ></div>
                      </div>
                    </a>

                    <div className="blogCard__content mt-24">
                      <div
                        data-anim-child="slide-up delay-6"
                        className="blogCard__info text-dark leading-md text-sm"
                      >
                        <a className="fw-400 mr-4" href="#">
                          Graphic Design
                        </a>{" "}
                        -<p className="d-inline-block ml-4">May 22, 2020</p>
                      </div>

                      <div data-anim-child="slide-up delay-7">
                        <h4 className="blogCard__title text-2xl leading-lg fw-500 mt-12">
                          <a data-barba href="blog-article.html">
                            Graphic Design: Useful Tips and Best Practices
                          </a>
                        </h4>
                      </div>

                      <div data-anim-child="slide-up delay-8" className="mt-12">
                        <a
                          data-barba
                          href="blog-article.html"
                          className="button -icon text-black"
                        >
                          Read More
                          <i
                            className="icon size-xs str-width-md"
                            data-feather="arrow-right"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div data-anim-wrap className="blogCard -type-1 -hover">
                    <a
                      className="blogCard__img"
                      data-barba
                      href="blog-article.html"
                    >
                      <div data-anim-child="img-right cover-dark-1 delay-1">
                        <div
                          className="ratio ratio-4:3 bg-image js-lazy"
                          data-bg="img/blog/thumbnail/3.jpg"
                        ></div>
                      </div>
                    </a>

                    <div className="blogCard__content mt-24">
                      <div
                        data-anim-child="slide-up delay-6"
                        className="blogCard__info text-dark leading-md text-sm"
                      >
                        <a className="fw-400 mr-4" href="#">
                          Web Design
                        </a>{" "}
                        -<p className="d-inline-block ml-4">April 19, 2020</p>
                      </div>

                      <div data-anim-child="slide-up delay-7">
                        <h4 className="blogCard__title text-2xl leading-lg fw-500 mt-12">
                          <a data-barba href="blog-article.html">
                            Review of Popular Web Design Trends in 2020
                          </a>
                        </h4>
                      </div>

                      <div data-anim-child="slide-up delay-8" className="mt-12">
                        <a
                          data-barba
                          href="blog-article.html"
                          className="button -icon text-black"
                        >
                          Read More
                          <i
                            className="icon size-xs str-width-md"
                            data-feather="arrow-right"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
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
                          data-barba
                          href="blog-1.html"
                          className="button -underline"
                        >
                          Blog
                        </a>
                      </div>
                      <div>
                        <a
                          data-barba
                          href="about-1.html"
                          className="button -underline mt-4"
                        >
                          Abous Us
                        </a>
                      </div>
                      <div>
                        <a
                          data-barba
                          href="#"
                          className="button -underline mt-4"
                        >
                          Shop
                        </a>
                      </div>
                      <div>
                        <a
                          data-barba
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
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Main;
