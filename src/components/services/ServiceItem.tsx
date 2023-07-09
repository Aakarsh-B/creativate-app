import { FC } from "react";
import Image from "next/image";

type ServiceItemProps = {
    title: string;
    subTitle: string;
    image: StaticImageData;
}

const ServiceItem: FC<ServiceItemProps> = ({title, subTitle, image}) => {
  return (
    <div className="fancy-grid__item">
      <a
        data-cursor-icon="arrow-right"
        data-anim-wrap
        className="portfolioCard -type-1 -hover"
        data-barba
        href="portfolio-single-1.html"
      >
        <div className="portfolioCard__img">
          {/* <div
            data-anim-child="img-right -cover-dark-1"
            className="portfolioCard__img__inner"
          > */}
            {/* <div
              className="ratio ratio-3:4 bg-image js-lazy"
              data-bg="img/projects/vertical/1.jpg"
            ></div> */}
            <Image src={image} />
          {/* </div> */}
        </div>

        <div className="portfolioCard__content pt-24">
          <div data-split="lines" data-anim-child="split-lines delay-6">
            <p className="portfolioCard__category leading-md text-dark">
              {title}
            </p>
          </div>

          <div data-split="lines" data-anim-child="split-lines delay-8">
            <h3 className="portfolioCard__title leading-md fw-500 text-2xl mt-8">
              {subTitle}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ServiceItem;
