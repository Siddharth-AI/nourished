import React from "react";
import { FaHeart, FaRetweet } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
const Cards = ({ image, title, icons }) => {
  return (
    <>
      <div className=" relative overflow-hidden">
        <div className="h-[300px]">
          <img src={image} alt="" className="rounded-md w-full block h-full" />
        </div>
        {title && (
          <h5 className=" text-sm sm:text-sm lg:text-sm xl:text-lg shadow-sm cursor-pointer absolute bottom-2 bg-white font-extrabold w-[90%] text-center uppercase tracking-widest py-2 left-1/2 -translate-x-1/2">
            {title}
          </h5>
        )}
        {icons && (
          <div className="flex justify-center ">
            <div className="absolute bottom-4 lg:-bottom-10 flex gap-5 lg:group-hover:bottom-4 lg:transition-all duration-500 ease-in-out">
              {[FaHeart, FaRetweet, IoBagHandle].map((Icon, index) => {
                return (
                  <div
                    key={index}
                    className="hover:bg-primary cursor-pointer hover:text-white size-9 rounded-full bg-white flex justify-center items-center hover:rotate-[360deg] hover:transition-all hover:duration-300">
                    <Icon className="size-5" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
