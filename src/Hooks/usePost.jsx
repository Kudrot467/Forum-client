import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const usePost = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useContext(AuthContext);
    const {data : myPosts=[]}=useQuery({
            queryKey:['myPosts'],
            queryFn: async()=>{
                const res=await axiosSecure.get(`/posts?email=${user?.email}`)
                return res.data;
            }
    });
    return[myPosts]
};

export default usePost;