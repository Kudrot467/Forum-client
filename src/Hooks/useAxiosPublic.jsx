import axios from "axios";
const axiosPublic=axios.create({
    baseURL:'https://1001-threads-server.vercel.app'
})
const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;