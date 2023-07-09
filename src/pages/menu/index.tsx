import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

import closeIcon from "@assets/menu/menu-close-icon.svg";
import leftIcon from "@assets/menu/left-arrow.svg";

type MenuProps = {
  setHomeSelected: Dispatch<SetStateAction<boolean>>;
  setMenuSelected: Dispatch<SetStateAction<boolean>>;
  setContactUsSelected: Dispatch<SetStateAction<boolean>>;
};

const Menu: FC<MenuProps> = ({
  setMenuSelected,
  setContactUsSelected,
  setHomeSelected,
}) => {
  const [closIconSize, setCloseIconSize] = useState<number>(74);

  const handleResize = () => {
    setCloseIconSize(
      window.innerWidth < 600 ? 48 : window.innerWidth < 900 ? 64 : 74
    );
  };

  useEffect(() => {
    setCloseIconSize(
      window.innerWidth < 600 ? 48 : window.innerWidth < 900 ? 64 : 74
    );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav js-nav">
      <div
      // className="nav__inner js-nav-inner"
      >
        <div className="nav__bg js-nav-bg"></div>

        <div className="nav__container">
          <div className="nav__header">
            <button type="button" className="nav-button-back js-nav-back">
              <i className="icon" data-feather="arrow-left-circle"></i>
            </button>
            <button
              type="button"
              className="nav-btn-close js-nav-close"
              onClick={() => {
                setMenuSelected(false);
              }}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={closeIcon}
                height={closIconSize}
                width={closIconSize}
              />
            </button>
          </div>

          <div className="nav__content">
            <div>
              <div>
                <ul className="navList js-navList">
                  <li>
                    <a>Classic Menu</a>
                  </li>

                  <li
                  // className="menu-item-has-children"
                  >
                    <div
                      onClick={() => {
                        setMenuSelected(false);
                        setHomeSelected(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <a>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          Home
                          <div className="left-icon-menu">
                            <Image src={leftIcon} width={20} height={20} />
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>

                  <li
                  // className="menu-item-has-children"
                  >
                    <div
                      onClick={() => {
                        setMenuSelected(false);
                        setContactUsSelected(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <a>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          Contact Us
                          <div className="left-icon-menu">
                            <Image src={leftIcon} width={20} height={20} />
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav__content__right" style={{ lineHeight: "32px" }}>
              <div className="nav__info">
                <div className="nav__info__item js-navInfo-item">
                  <h5 className="text-sm tracking-none fw-500">Address</h5>

                  <div className="nav__info__content text-lg text-white mt-16">
                    <p style={{ marginBottom: "0px" }}>
                      Studio Stukram 1910 Gateway Road, Portland, Oregon 97230
                    </p>
                  </div>
                </div>

                <div className="nav__info__item js-navInfo-item">
                  <h5 className="text-sm tracking-none fw-500">Socials</h5>

                  <div className="nav__info__content text-lg text-white mt-16">
                    <a href="#">Behance</a>
                    <a href="#">Dribbble</a>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                  </div>
                </div>

                <div className="nav__info__item js-navInfo-item">
                  <h5 className="text-sm tracking-none fw-500">Contact Us</h5>

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
    </nav>
  );
};

export default Menu;
