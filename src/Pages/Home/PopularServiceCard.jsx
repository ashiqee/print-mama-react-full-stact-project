import Btn from "./../../Components/sharedComponents/Button/Btn";
import { Link } from "react-router-dom";
import ServiceProviderCard from "../../Components/sharedComponents/Button/Card/ServiceProviderCard";
const PopularServiceCard = ({ service }) => {
  const view = "Details";
  const {
    image,
    serviceName,
    serviceArea,
    price,
    serviceProviderName,
    _id,
    description,
  } = service;
  return (
    <div>
      <div
        className="card card-side  bg-[linear-gradient(20deg,#E77951,4%,#1e2631,95%,#000103)] 
    bg-[length:200%_100%]  border-primary bg-primary 
    bg-opacity-10 shadow-2xl  rounded-xl border flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center "
      >
        <figure>
          <img className="w-96 h-96" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-secondary">{serviceName}</h2>
          <p>{description.slice(0, 100)}</p>
          <h2 className="text-xl text-primary">Price: {price} BDT</h2>

          <div className="grid relative -top-10 gap-20 justify-end">
            <div>
              <ServiceProviderCard service={service} />
              {serviceProviderName}
            </div>
            <span>
              <Link to={`/serviceDetails/${_id}`}>
                {" "}
                <Btn view={view} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
