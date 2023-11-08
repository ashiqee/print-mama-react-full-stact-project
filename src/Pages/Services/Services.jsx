import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
// import Slider from "../Home/Slider";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
import Btn from "../../Components/sharedComponents/Button/Btn";
import { useState } from "react";

const Services = () => {
  const axiosSecure = useAxiosSecure();
  const [dataLength, setDataLength] = useState(6);
  const view = "Show More";
  const [search, setSearch] = useState("");
  const [serviceData, setService] = useState([]);
  // .get(`/services?search=${search}`)
  const getServiceData = async () => {
    const res = await axiosSecure.get("/services");
    // console.log(res);
    setService(res.data);
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
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchInputValue = form.search.value;
    setSearch(searchInputValue);
  };

  // useEffect(() => {
  //   axiosSecure(`/searchService?search=${search}`).then((res) => set);
  // }, [axiosSecure, search]);

  return (
    <div className="relative top-20 mb-28 container mx-auto">
      <form onSubmit={handleSearch}>
        <input type="text" name="search" />
        <input className="btn" type="submit" value="Search Services" />
      </form>
      <div className="grid grid-cols-1 gap-10">
        {serviceData.slice(0, dataLength)?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div
        className={
          dataLength === serviceData?.length ? "hidden" : "flex justify-center"
        }
      >
        <button onClick={() => setDataLength(serviceData?.length)}>
          <Btn view={view} />
        </button>
      </div>
    </div>
  );
};

export default Services;
