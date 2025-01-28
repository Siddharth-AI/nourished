import React from "react";
import banner1 from "../assets/images/banner/banner-1.jpg";
import banner2 from "../assets/images/banner/banner-2.jpg";
const Banner = () => {
  return (
    <section className="py-5 shadow-sm">
      <div className=" container ">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-5">
          <div>
            <img src={banner1} alt="" className="w-full cursor-pointer" />
          </div>
          <div>
            <img src={banner2} alt="" className="w-full cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
