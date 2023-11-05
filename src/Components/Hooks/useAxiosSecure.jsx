import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/mama",
  withCredentials: true,
});

const useAxiosSecure = () => {
    // const { logOut } = useAuth();
    // const navigate = useNavigate();


// useEffect(()=>{
//   axiosSecure.interceptors.response.use(res=>{
//     return res;
//   },(err)=>{
//     console.log('error tracked',err.response);
//     if(err.response.status ===401 || err.response.status === 403){
//       console.log('logOut User');
//       logOut()
//       .then(()=>{
//         navigate('/login')
//       })
//     }
//   })
// },[])

  return axiosSecure;
};

export default useAxiosSecure;
