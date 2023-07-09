import { FC } from "react";
import Image from "next/image";

type ServiceDesciptionProps = {
  items: string[];
  title: string;
  description: string;
  image: StaticImageData;
};

const ServiceDesciption: FC<ServiceDesciptionProps> = ({
  items,
  title,
  description,
  image,
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="serviceCard">
        <div className="serviceCard__content">
          <div className="d-flex align-items-center ml-minus-4">
            <div className="px-20 py-20 bg-white shadow-light rounded-full rounded-image">
              <Image src={image} height={40} width={40} />
            </div>
          </div>

          <h3 className="serviceCard__title text-2xl fw-500 tacking-none mt-32">
            {title}
          </h3>

          <p className="serviceCard__text mt-16">{description}</p>

          <div className="text-black mt-24">
            {items.map((item, index) => (
              <p className={`${index > 0 ? "mt-8" : ""}`}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDesciption;
