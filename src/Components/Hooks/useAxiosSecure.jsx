import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/mama",
  withCredentials: true,
});

const useAxiosSecure = () => {
  //   const { logOut } = useAuth();
  //   const navigate = useNavigate();

  return axiosSecure;
};

export default useAxiosSecure;
