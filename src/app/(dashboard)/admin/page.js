import UserCard from "@/components/UserCard";
import Image from "next/image";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-2/3">
        {/* User Card  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard name={"teacher"} />
          <UserCard name={"Student"} />
          <UserCard name={"parent"} />
          <UserCard name={"staff"} />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full lg:w-1/3">ok</div>
    </div>
  );
};

export default AdminPage;
