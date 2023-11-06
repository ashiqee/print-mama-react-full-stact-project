import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import ServiceProviderCard from "../../Components/sharedComponents/Button/Card/ServiceProviderCard";


const ServiceDetails = () => {
  const axiosSecure = useAxiosSecure();
  const {id} = useParams()

  

  const { data: service } = useQuery({
    queryKey: ["update"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/serviceDetails/${id}`);
      console.log(res);
     
      return res;
    },
  });

  const serviceData = service?.data;
  console.log(serviceData);

  return (
    <div>


<div className="hero min-h-[30vh]" style={{backgroundImage: 'url(https://wdtprintme.wpengine.com/wp-content/uploads/2023/09/Breadcrumb-Bg.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <div className="text-sm breadcrumbs">

  <ul>
    <li><Link to='/'>Home</Link></li> 
    <li><Link to='/services'>Services</Link></li> 
    <li>{serviceData?.serviceName}</li>
  </ul>
</div>
    </div>
  </div>
</div>


{/* display: grid;
    width: 100%;
    place-items: center;
    background-size: cover;
    background-position: center;
}
.hero > * {
    grid-column-start: 1;
    grid-row-start: 1; */}


<div className="grid w-full bg-cover bg-center min-h-[450px]" style={{backgroundImage: `url(${serviceData?.image})`}}>
  <div className="hero-overlay bg-opacity-60">
<div className="container grid md:grid-cols-2 pt-20 mx-auto">
  {/* service info  */}
<div className="space-y-3 ">
<h2 className="text-4xl text-secondary font-bold" >{serviceData?.serviceName}</h2>
<h2 className="text-2xl font-bold" >Price: {serviceData?.price} BDT</h2>


</div>
{/* provider information */}
<div>
  <h2 className="text-2xl border-b-2">Provider Information </h2>
<div className="flex mt-10 gap-10">
<ServiceProviderCard service={serviceData}/> 
<div className="space-y-2">
<h2 className="text-2xl font-bold" >Name: {serviceData?.serviceProviderName}</h2>
<h2 className="text-xl font-bold" >Location: {serviceData?.serviceArea}</h2>
<p>This Service Provider sort detail more khow later</p>
</div>

</div>
</div>

</div>
  </div>

</div>
    </div>
  );
};

export default ServiceDetails;
