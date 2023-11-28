import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAnnouncement = () => {
    const axiosPublic=useAxiosPublic();
    const {data:announcements=[]}=useQuery({
         queryKey:['announcements'],
         queryFn:async()=>{
             const res=await axiosPublic.get('/makeAnnouncements')
             return res.data;
         }
        });
        return [announcements]
};

export default useAnnouncement;