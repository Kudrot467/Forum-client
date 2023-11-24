import { FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/DCN0g8X/64682.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="rounded-full flex bg-[#C6A921] ">
            <input type="text" placeholder="search here.." className="px-10 text-black text-lg rounded-full w-full" name="search" id="" />
            <button className=" text-white text-xl rounded-full  p-4"><FaSearch></FaSearch></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
