import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const usePosts = () => {
   const axiosPublic=useAxiosPublic();
   const {data:allPost=[]}=useQuery({
        queryKey:['allPost'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/posts')
            return res.data;
        }

   });
   return [allPost]

};

export default usePosts;