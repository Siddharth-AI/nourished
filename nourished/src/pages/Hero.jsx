import React, { useState } from "react";
import hero from "../assets/images/hero/hero.jpg";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Search } from "../components/ui/Search";
const Hero = () => {
  const [showDepartment, setShowDepartment] = useState(true);
  function handleShowDepartment() {
    setShowDepartment((prevData) => !prevData);
  }

  return (
    <section className="shadow-sm py-5">
      <div className="container flex flex-col gap-5 xl:flex-row">
        <div className="xl:w-[270px] w-full">
          <div
            className="sm:px-8 px-3 xl:px-0 bg-primary flex w-full justify-between xl:justify-center items-center gap-5  cursor-pointer"
            onClick={handleShowDepartment}>
            <div className="flex items-center gap-5">
              <FaBars className="text-white flex" />
              <h1 className=" flex py-2.5 text-white font-extrabold text-center text-lg tracking-wide">
                All departments
              </h1>
            </div>
            <FaAngleDown
              className={`text-white flex transition-all ${
                !showDepartment ? "-rotate-90 " : " rotate-0"
              } `}
            />
          </div>
          <div
            className={`overflow-hidden  transition-all duration-500 ease-in-out ${
              !showDepartment ? "max-h-0" : "max-h-[500px]"
            }`}>
            <ul className={`border font-semibold py-2 `}>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Fresh Meat
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Vegetables
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Fruit & Nut Gifts
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Fresh Berries
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Ocean Foods
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Butter & Eggs
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Fastfood
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Fresh Onion
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Papayaya & Crisps
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Oatmeal
              </li>
              <li className="p-1.5 pl-4 cursor-pointer hover:text-primary">
                Fresh Bananas
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Search />
          </div>
          <div className="relative">
            <img src={hero} alt="" className="w-full" />
            <div className="flex flex-col gap-1 absolute top-1/2 -translate-y-1/2 ml-3 md:gap-1.5 lg:gap-2">
              <span className="text-primary text-xs tracking-[4px] font-[900] sm:text-lg md:text-xl lg:text-2xl">
                FRUIT FRESH
              </span>
              <h1 className="text-sm font-[900] leading-tight sm:text-lg md:text-xl lg:text-3xl">
                Vegetable 100% Organic
              </h1>
              <p className="text-[#6f6f6f] text-xs sm:text-sm md:text-lg lg:text-xl">
                Free Pickup and Delivery Available
              </p>
              <button className="w-[50%] mt-2 px-2 py-2 rounded-sm shadow-sm text-sm bg-primary text-white font-bold sm:text-lg sm:mt-3 md:text-xl md:mt-4 lg:text-2xl hover:bg-[#7ead39cc]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
