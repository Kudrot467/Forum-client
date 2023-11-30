import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useComments = () => {
   const axiosSecure=useAxiosSecure();
   const {data: comments=[],refetch}=useQuery({
    queryKey:['comments'],
    queryFn:async()=>{
        const res=await axiosSecure.get('/comments');
        return res.data
    }
});
return[comments,refetch]
};

export default useComments;