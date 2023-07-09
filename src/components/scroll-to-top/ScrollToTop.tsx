import Image from "next/image";

import topArrow from "@assets/top-arrow.svg";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setIsAtTop(window.pageYOffset === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-arrow"
      onClick={handleScrollToTop}
      style={{ cursor: isAtTop ? "default" : "pointer" }}
    >
      <Image src={topArrow} width={56} height={56} />
    </div>
  );
};
export default ScrollToTop;
