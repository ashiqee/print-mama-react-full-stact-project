import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MySchedules = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [pendingServices, setPendingService] = useState([]);
  const [pending, setPending] = useState(0);
  const [isProgress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);
  const url = `/pendingService?email=${user?.email}`;

  console.log(pending);

  useEffect(() => {
    axiosSecure.get(url).then((res) => setPendingService(res.data));
  }, [axiosSecure, url, setPendingService]);

  console.log(pendingServices);

  useEffect(() => {
    const filter = pendingServices?.filter(
      (service) => service.serviceStatus === "Pending"
    );

    setPending(filter.length);

    const filterInProgress = pendingServices?.filter(
      (service) => service.serviceStatus === "In Progress"
    );

    setProgress(filterInProgress.length);
    const filterCompleted = pendingServices?.filter(
      (service) => service.serviceStatus === "Completed"
    );

    setCompleted(filterCompleted?.length);
  }, [pendingServices]);
  return (
  <>
    <div className="flex justify-around gap-10 mt-20">
      <Link to="/dashboard/mySchedules/myPending"> 
      <div className="card container mx-auto">
        <div className="card  transform hover:rotate-6 h-56 w-96 rounded-xl bg-secondary bg-opacity-10 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform">
          <div className="group  flex h-full w-full select-none items-center justify-center rounded-lg border border-neutral-900 text-sm font-light text-slate-300">
            <div className="duration-600 absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#23727c] to-[#a7515c] opacity-0 blur transition group-hover:opacity-75" />
            <span className="text-md bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-bold text-transparent">
              <span className="text-4xl  flex justify-center text-secondary"></span>
              <h2 className="text-2xl text-center">My Pending</h2>
              <h2 className="text-2xl text-center">{pending}</h2>
            </span>
          </div>
         
        </div>
       
      </div>
      </Link>
      <div className="card container mx-auto">
        <Link to='/dashboard/mySchedules/myPending'>
        <div className="card  transform hover:rotate-6 h-56 w-56 rounded-xl bg-secondary bg-opacity-10 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform">
          <div className="group  flex h-full w-full select-none items-center justify-center rounded-lg border border-neutral-900 text-sm font-light text-slate-300">
            <div className="duration-600 absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#23727c] to-[#a7515c] opacity-0 blur transition group-hover:opacity-75" />
            <span className="text-md bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-bold text-transparent">
              <span className="text-4xl  flex justify-center text-secondary"></span>
              <h2 className="text-2xl text-center">In Progress</h2>
              <h2 className="text-2xl text-center">{isProgress}</h2>
            </span>
          </div>
        </div>
        </Link>
      </div>
      <div className="card container mx-auto">
        <Link to='/dashboard/mySchedules/myPending'>
        <div className="card  transform hover:rotate-6 h-56 w-56 rounded-xl bg-secondary bg-opacity-10 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform">
          <div className="group  flex h-full w-full select-none items-center justify-center rounded-lg border border-neutral-900 text-sm font-light text-slate-300">
            <div className="duration-600 absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#23727c] to-[#a7515c] opacity-0 blur transition group-hover:opacity-75" />
            <span className="text-md bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-bold text-transparent">
              <span className="text-4xl  flex justify-center text-secondary"></span>
              <h2 className="text-2xl text-center">Comnpleted</h2>
              <h2 className="text-2xl text-center">{completed}</h2>
            </span>
          </div>
        </div>
        </Link>
      </div>
 
    
    </div>
  <div > <Link to='/dashboard/mySchedules/myBooking'>
  <div className="card mt-10  container mx-auto">
       
        <div className="card  transform hover:rotate-6 h-56 w-96 rounded-xl bg-secondary bg-opacity-10 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform">
          <div className="group  flex h-full w-full select-none items-center justify-center rounded-lg border border-neutral-900 text-sm font-light text-slate-300">
            <div className="duration-600 absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#23727c] to-[#a7515c] opacity-0 blur transition group-hover:opacity-75" />
            <span className="text-md bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-bold text-transparent">
              <span className="text-4xl  flex justify-center text-secondary"></span>
              <h2 className="text-2xl text-center">My Booking</h2>
              {/* <h2 className="text-2xl text-center">{completed}</h2> */}
            </span>
          </div>
        </div>
       
      </div>

  </Link></div>
    </>
  );
};

export default MySchedules;
