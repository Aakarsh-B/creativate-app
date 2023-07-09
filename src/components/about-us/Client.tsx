import { FC } from "react";
import Image from "next/image";

type ClientProps = {
  clientName: string;
  clientLogo: StaticImageData;
  height: number;
  width: number;
};

const Client: FC<ClientProps> = ({ clientName, clientLogo, height, width }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="clientsItem -hover ratio ratio-3:2 border-dark rounded-4 py-4">
        <div className="clientsItem__img">
          <Image
            className="col-7"
            src={clientLogo}
            alt="Client"
            // layout="fill"
            // objectFit="contain"
            width={width}
            height={height}
          />
        </div>
        <div className="clientsItem__content">
          <h5 className="clientsItem__title text-xl text-white">
            {clientName}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Client;
