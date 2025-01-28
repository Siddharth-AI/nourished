import React from "react";
import { categoriesData, categoriesCarouselSetting } from "../data/productData";
import Slider from "react-slick";
import Cards from "../components/ui/Cards";

const Categories = () => {
  return (
    <section className="py-5 shadow-sm">
      <div className="container">
        <div className="slider-container size-[80%] mx-auto sm:size-[90%] md:size-[100%]  lg:w-auto">
          <Slider {...categoriesCarouselSetting}>
            {categoriesData.map((item) => (
              <div className="p-4" key={item.title}>
                <div className="relative w-full">
                  <Cards {...item} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Categories;
