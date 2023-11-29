import AllPost from "../AllPost/AllPost";
import Banner from "../Banner/Banner";
import ShowAnnouncements from "../ShowAnnouncements/ShowAnnouncements";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShowAnnouncements></ShowAnnouncements>
            <AllPost></AllPost>
        </div>
    );
};

export default Home;