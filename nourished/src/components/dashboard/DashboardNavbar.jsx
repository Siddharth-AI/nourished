import { useContext } from "react";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminProvider";
import { dashboardNavbarData } from "../../data/productData";
const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { setAdmin } = useContext(AdminContext);
  const handleLogout = () => {
    setAdmin(false);
    navigate("/");
  };
  return (
    <header className="bg-white shadow-lg overflow-hidden">
      <div className="container-[100%] flex flex-col gap-2 py-2 lg:flex-row lg:justify-between lg:gap-4 lg:container">
        <div>
          <h1 className="text-5xl font-extrabold cursor-pointer font-serif px-2 lg:px-0">
            Dash<span className="text-blue-600">board</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-9 xl:justify-between xl:flex-1 xl:ml-20">
          <ul className="flex flex-col uppercase font-extrabold tracking-widest w-full lg:flex-row lg:items-center xl:gap-3">
            {dashboardNavbarData.map(({ title, link }) => (
              <Link
                to={link}
                key={title}
                className="flex hover:text-primary w-full justify-end p-2 lg:p-3 lg:justify-center lg:w-auto cursor-pointer hover:text-blue-600">
                {title}
              </Link>
            ))}
          </ul>
          <div className="flex items-center justify-end p-2 text-3xl">
            <IoLogOut
              className=" hover:text-red-500 cursor-pointer"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
