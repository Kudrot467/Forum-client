// import  { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const[isAdmin,setIsAdmin]=useState('');
//  const[loading,setLoading]=useState(true);
//   useEffect(()=>{
//     if(user?.email)
//     {
//         axiosSecure.get(`/users/admin/${user?.email}`)
//         .then(res=>res.json())
//         .then(data=>{setIsAdmin(data?.admin)
//         setLoading(false)
//         })
//     }
//   },[])

//   return [isAdmin, loading];
// };

// export default useAdmin;
