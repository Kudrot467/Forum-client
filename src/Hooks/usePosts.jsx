import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePosts = () => {
   const axiosSecure=useAxiosSecure();
   const {data:allPost=[]}=useQuery({
        queryKey:['allPost'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/posts')
            return res.data;
        }

   });
   return [allPost]

};

export default usePosts;