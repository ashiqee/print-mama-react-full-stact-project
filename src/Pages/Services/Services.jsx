import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Slider from "../Home/Slider";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
import Btn from "../../Components/sharedComponents/Button/Btn";

const Services = () => {
  const axios = useAxiosSecure();
  const view="Show More";

  const getServiceData = async () => {
    const res = await axios.get("/services");
    console.log(res);
    return res;
  };



  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServiceData,
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }
  if (isError) {
    return <p>Failed Load: {error}</p>;
  }

  console.log(services.data);
  const serviceData = services.data;
  // const serviceLength = serviceData?.length;

  return (
    <div className="relative top-20 container mx-auto">
      <div className="grid grid-cols-1 gap-10">
        {serviceData?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    <span className="flex justify-center"> <Btn view={view} /></span>
    </div>
  );
};

export default Services;
