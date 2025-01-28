import React from "react";
import HeadingPart from "../components/ui/HeadingPart";
import { blogData } from "../data/productData";
import Cards from "../components/ui/Cards";
import { FaRegCalendar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";

const Blog = () => {
  return (
    <section className="shadow-sm py-5 md:py-10">
      <div className="container pb-10">
        <HeadingPart heading="From The Blog" />
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-7 md:grid-cols-3">
          {blogData.map(({ image, title, description }, index) => {
            return (
              <div key={index}>
                <Cards image={image} />
                <div className=" flex items-center gap-4 mt-5 text-[#b2b2b2]">
                  <div className="flex items-center gap-1">
                    <FaRegCalendar />
                    <p className="text-sm sm:text-lg">May 4,2019</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoChatbubbleOutline />
                    <p className="text-sm sm:text-lg">5</p>
                  </div>
                </div>
                <h5 className="text-xl font-extrabold mt-4 mb-2">{title}</h5>
                <p className="text-[#6f6f6f] leading-7">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
