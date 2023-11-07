import { useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Components/Hooks/useAuth";

const MySchedules = () => {
  // /mybooking?email=lores@print.com

  const [myBookingData, setServiceData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const getMyServiceData = async () => {
    // const url = `/myservice?email=${user?.email}`

    const res = await axiosSecure
      .get(`/mybooking?email=${user?.email}`)
      .then((res) => res.data);
    console.log(res);
    setServiceData(res);
    return res;
  };

  const {
    data: myService,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["myService"],
    queryFn: getMyServiceData,
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  if (isError) {
    return <p>Failed Load: {error}</p>;
  }

  console.log(myBookingData);
  return (
    <div className="container mx-auto">
      {/* <my booking section  */}
      <div>
        <h2>My Bookings total: {myBookingData?.length} Services</h2>

        {myBookingData?.map((mybooked) => (
          <li key={mybooked._id}> {mybooked.serviceName} </li>
        ))}
      </div>
    </div>
  );
};

export default MySchedules;
