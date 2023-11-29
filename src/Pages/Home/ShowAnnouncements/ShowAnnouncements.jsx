import { FaBullhorn } from "react-icons/fa";
import useAnnouncement from "../../../Hooks/useAnnouncement";

const ShowAnnouncements = () => {
  const [announcements] = useAnnouncement();

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-2xl text-[#C6A921] font-semibold underline flex items-center">
        <FaBullhorn></FaBullhorn> --*{announcements.length}*--
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {announcements.map((announcement) => (
          <div key={announcement._id}>
            <div className="card card-compact bg-base-200 shadow-xl">
              <div className="navbar bg-[#C6A921]">
                <div className="flex-1">
                  <a className="btn btn-ghost text-xl text-white font-semibold">
                    {" "}
                    Announcements{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title h-[30px] text-[#C6A921] ">
                {announcement.announcementTitle}
              </h2>
              <p className="h-[30px]">{announcement.announcementDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAnnouncements;
