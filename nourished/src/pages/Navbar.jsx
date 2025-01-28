import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { data } from "../data/productData";
const Navbar = () => {
  return (
    <header className="shadow-lg overflow-hidden bg-white">
      <div className="container-[100%] flex flex-col gap-2 py-2 lg:flex-row lg:justify-between lg:gap-4 lg:container">
        <div>
          <h1 className="text-5xl font-extrabold cursor-pointer font-serif px-2 lg:px-0">
            <span className="text-primary">Nourish</span>ed
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-9 xl:justify-between xl:flex-1 xl:ml-20">
          <ul className="flex flex-col uppercase font-extrabold tracking-widest w-full lg:flex-row lg:items-center xl:gap-3">
            {data.map(({ title, link }) => (
              <Link
                to={link}
                key={title}
                className="flex cursor-pointer hover:text-primary w-full justify-end p-2 lg:p-3 lg:justify-center lg:w-auto text-[16px]">
                {title}
              </Link>
            ))}
          </ul>
          <div className="flex justify-end p-2 gap-7 items-center">
            <Link to="/login">
              <FaUserCircle className=" hover:text-red-500 cursor-pointer text-xl" />
            </Link>
            <IoBagHandle className=" hover:text-yellow-300 cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
