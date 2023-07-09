import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";

import logoImage from "@assets/logo-dark.png";
import menuImage from "@assets/menu.svg";

type NavBarProps = {
  setHomeSelected: Dispatch<SetStateAction<boolean>>;
  setMenuSelected: Dispatch<SetStateAction<boolean>>;
  setContactUsSelected: Dispatch<SetStateAction<boolean>>;
};

const NavBar: FC<NavBarProps> = ({
  setMenuSelected,
  setContactUsSelected,
  setHomeSelected,
}) => {
  return (
    <header className="header -light -sticky-light js-header">
      <div className="header__bar">
        <div style={{ cursor: "pointer" }}>
          <Image
            src={logoImage}
            height={29}
            width={66}
            alt="Logo"
            priority
            onClick={() => {
              setHomeSelected(true);
              setContactUsSelected(false);
              setMenuSelected(false);
            }}
          />
        </div>
        <div
          className="header__menu js-header-menu"
          onClick={() => {
            setMenuSelected(true);
            setContactUsSelected(false);
            setHomeSelected(false);
          }}
        >
          <button type="button" className="nav-button-open js-nav-open">
            <Image src={menuImage} height={36} width={36} alt="Menu" priority />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
