import { FC, useEffect, useState } from "react";

import ContactUs from "@pages/contact-us";
import Main from "@pages/main";
import Menu from "@pages/menu";

const Home: FC = () => {
  const [isHomeSelected, setHomeSelected] = useState<boolean>(true);
  const [isMenuSelected, setMenuSelected] = useState<boolean>(false);
  const [isContactUsSelected, setContactUsSelected] = useState<boolean>(false);

  useEffect(() => {
    console.log("isHomeSelected", isHomeSelected);
  }, [isHomeSelected]);

  useEffect(() => {
    console.log("isMenuSelected", isMenuSelected);
  }, [isMenuSelected]);

  useEffect(() => {
    console.log("isContactUsSelected", isContactUsSelected);
  }, [isContactUsSelected]);

  return (
    <>
      {isHomeSelected && (
        <Main
          setMenuSelected={setMenuSelected}
          setContactUsSelected={setContactUsSelected}
          setHomeSelected={setHomeSelected}
        />
      )}
      {isMenuSelected && (
        <Menu
          setMenuSelected={setMenuSelected}
          setContactUsSelected={setContactUsSelected}
          setHomeSelected={setHomeSelected}
        />
      )}
      {isContactUsSelected && (
        <ContactUs
          setMenuSelected={setMenuSelected}
          setContactUsSelected={setContactUsSelected}
          setHomeSelected={setHomeSelected}
        />
      )}
    </>
  );
};

export default Home;
