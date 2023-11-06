import axios from "axios";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/mama",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const logOut = useAuth();

  // console.log(logOut);
  // const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        // console.log(res);

        return res;
      },
      (error) => {
        console.log("error tracked", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logOut User");
          logOut().then(() => {
            <Navigate to="/login" />;
          });
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
